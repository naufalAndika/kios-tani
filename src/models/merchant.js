const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const merchantSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valid!')
            }
        }
    },
    password: {
        type: String,
        trim: true,
        minlength: 4,
        required: true
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    avatar: {
        type: Buffer
    },
    members: [{
        member: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Farmer'
        }
    }],
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

merchantSchema.pre('save', async function (next) {
    const merchant = this

    if (merchant.isModified('password')) {
        merchant.password = await bcrypt.hash(merchant.password, 8)
    }

    next()
})

merchantSchema.statics.findByCredentials = async (email, password) => {
    const merchant = await Merchant.findOne({ email })
    
    if (!merchant) {
        throw new Error("Invalid Login")
    }

    const isMatch = await bcrypt.compare(password, merchant.password)
    if (!isMatch) {
        throw new Error("Invalid Login")
    }
    
    return merchant
}

merchantSchema.methods.generateAuthToken = async function () {
    const merchant = this
    const token = jwt.sign({ _id: merchant._id.toString() }, 'KIOSTANI')

    merchant.tokens = merchant.tokens.concat({ token })
    await merchant.save()

    return token
}

const Merchant = mongoose.model('Merchant', merchantSchema)

module.exports = Merchant
