const mongoose = require('mongoose')

const harvestSchema = new mongoose.Schema({
    grow: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Grow'
    },
    price: {
        type: Number
    },
    amount: {
        type: Number,
        required: true
    },
    merchant: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Merchant'
    }
})

const Harvest = mongoose.model('Harvest', harvestSchema)

module.exports = Harvest
