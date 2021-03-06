const Product = require('../models/product')
const Harvest = require('../models/harvest')

const create = async (data) => {
    const product = new Product(data)

    try {
        await product.save()

        return {
            product
        }
    } catch (e) {
        throw e
    }
}

const addStock = async (id, harvestId) => {
    try {
        const product = await Product.findById(id)
        product.goods = product.goods.concat(harvestId)
        
        const harvest = await Harvest.findById(harvestId)
        product.stock += harvest.amount

        await product.save()

        return {
            product
        }
    } catch (e) {
        throw e
    }
}

const search = async (query) => {
    try {
        const products = await Product.find({
            name: {'$regex': query}
        })

        return {
            products
        }
    } catch (e) {
        throw e
    }
}

const detail = async (id) => {
    try {
        const product = await Product.findById(id)
        return {
            product
        }
    } catch (e) {
        throw e
    }
}

const list = async (merchant) => {
    try {
        const products = await Product({
            merchant
        })
        return {
            products
        }
    } catch (e) {
        throw e
    }
}

module.exports = {
    create,
    addStock,
    search,
    detail,
    list
}
