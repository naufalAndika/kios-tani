const Farmer = require('../models/farmer')

const create = async (data) => {
    const farmer = new Farmer(data)

    try {
        await farmer.save()
        return farmer
    } catch (e) {
        throw e
    }
}

const list = async (merchant) => {
    try {
        const farmers = await Farmer.find({
            merchant
        })

        return {
            farmers
        }
    } catch (e) {
        throw e
    }
}

module.exports = {
    create,
    list
}
