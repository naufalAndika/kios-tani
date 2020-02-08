const Grow = require('../models/grow')

const create = async (data) => {
    const grow = new Grow(data)
    
    try {
        await grow.save()
        await grow.populate('plant').execPopulate()

        grow.estimation = grow.plant.yields / 10000 * grow.landArea * .8
        await grow.save()

        return {
            grow
        }
    } catch (e) {
        throw e
    }
}

module.exports = {
    create
}
