const mongoose = require('mongoose')

const growSchema = new mongoose.Schema({
    plant: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Plant'  
    },
    landArea: {
        type: Number,
        required: true
    },
    estimation: {
        type: Number
    },
    farmer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Farmer'
    },
    merchant: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Merchant'
    }
})

const Grow = mongoose.model('Grow', growSchema)

module.exports = Grow
