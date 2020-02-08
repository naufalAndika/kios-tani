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

const login = async (email, password) => {
    try {
        const merchant = await Merchant.findByCredentials(email, password)
        const token = await merchant.generateAuthToken()

        return {
            merchant,
            token
        }
    } catch (e) {
        throw e
    }
}

module.exports = {
    create,
    login
}
