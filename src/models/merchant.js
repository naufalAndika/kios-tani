const mongoose = require('mongoose')

const merchantSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
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

const Merchant = mongoose.model('Merchant', merchantSchema)

module.exports = Merchant
