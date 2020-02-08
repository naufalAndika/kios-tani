const mongoose = require('mongoose')

const harvestSchema = new mongoose.Schema({
    plant: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    amount: {
        type: Number,
        required: true
    },
    farmer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Farmer'
    }
})

const Harvest = mongoose.model('Harvest', harvestSchema)

module.exports = Harvest
