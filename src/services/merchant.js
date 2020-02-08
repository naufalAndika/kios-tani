const Merchant = require('../models/merchant')

const create = async (data) => {
    const merchant = new Merchant(data)
    
    try {
        await merchant.save()
        return {
            merchant
        }
    } catch (e) {
        throw e
    }
}

module.exports = {
    create
}
