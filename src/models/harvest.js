const mongoose = require('mongoose')

const harvestSchema = new mongoose.Schema({
    grow: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    price: {
        type: Number
    },
    amount: {
        type: Number,
        required: true
    }
})

const Harvest = mongoose.model('Harvest', harvestSchema)

module.exports = Harvest
