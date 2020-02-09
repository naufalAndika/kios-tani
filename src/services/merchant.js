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

const list = async () => {
    try {
        const merchants = await Merchant.find({})
        return {
            merchants
        }
    } catch (e) {
        throw e
    }
}

const logout = async (merchant) => {
    try {
        merchant.tokens = []
        await merchant.save()

        return "Logout Success"
    } catch (e) {
        throw e
    }
}

module.exports = {
    create,
    login,
    list,
    logout
}
