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

const pay = async (id) => {
    try {
        const purchase = await Purchase.findById(id)
        purchase.isAccepted = true
        await purchase.save()
        return {
            purchase
        }
    } catch (e) {
        throw e
    }
}

module.exports = {
    create,
    pay
}
