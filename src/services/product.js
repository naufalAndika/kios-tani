const Product = require('../models/product')

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

const addStock = async (id, harvest) => {
    try {
        const product = await Product.findById(id)
        product.goods = product.goods.concat({ harvest })
        await product.save()

        return {
            product
        }
    } catch (e) {
        throw e
    }
}

module.exports = {
    create,
    addStock
}
