const mongoose = require('mongoose')

const farmerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    identityNumber: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isNumeric(value)) {
                throw new Error('Identity number is not valid!')
            }
        }
    },
    landArea: {
        type: Number,
        required: true
    },
    balance: {
        type: Number,
    }
})

const Farmer = mongoose.model('Farmer', farmerSchema)

module.exports = Farmer
