const mongoose = require('mongoose')

const purchaseSchema = new mongoose.Schema({
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    },
    amount: {
        type: Number,
        required: true
    }
})

const Purchase = mongoose.model('Purchase', purchaseSchema)

module.exports = Purchase
