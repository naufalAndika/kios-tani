const mongoose = require('mongoose')

const purchaseSchema = new mongoose.Schema({
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    goods: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Product'
        },
        amount: {
            type: Number,
            required: true
        }
    }],
    total: {
        type: Number
    },
    isAccepted: {
        type: Boolean,
        default: false
    }
})

const Purchase = mongoose.model('Purchase', purchaseSchema)

module.exports = Purchase
