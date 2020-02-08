const Purchase = require('../models/purchase')

const create = async (data) => {
    const purchase = new Purchase(data)
    try {
        await purchase.save()
        return {
            purchase
        }
    } catch (e) {
        throw e
    }
}

module.exports = {
    create
}
