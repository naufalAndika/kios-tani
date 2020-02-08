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

module.exports = {
    create
}
