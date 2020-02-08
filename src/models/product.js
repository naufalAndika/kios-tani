const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    goods: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Harvest'
    }],
    merchant: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Merchant'
    },
    stock: {
        type: Number,
        default: 0
    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
