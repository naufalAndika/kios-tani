const mongoose = require('mongoose')

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
        minlength: 4
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

const Merchant = mongoose.model('Merchant', merchantSchema)

module.exports = Merchant
