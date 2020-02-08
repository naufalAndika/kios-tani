const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

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
    }]
})

merchantSchema.pre('save', async function (next) {
    const merchant = this

    if (merchant.isModified('password')) {
        merchant.password = await bcrypt.hash(merchant.password, 8)
    }

    next()
})

const Merchant = mongoose.model('Merchant', merchantSchema)

module.exports = Merchant
