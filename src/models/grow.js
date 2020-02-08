const mongoose = require('mongoose')

const growSchema = new mongoose.Schema({
    plant: {
        type: String,
        required: true,        
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
    }
})

const Grow = mongoose.model('Grow', growSchema)

module.exports = Grow
