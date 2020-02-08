const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    goods: [{
        harvest: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Harvest'
        }
    }],
    merchant: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Merchant'
    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
