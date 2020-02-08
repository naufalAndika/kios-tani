const Grow = require('../models/grow')

const create = async (data) => {
    try {
        await data.plant.populate({
            path: 'Plant'
        }).execPopulate()

        const grow = new Grow({
            ...data,
            estimation: data.plant.yields / 10000 * data.landArea
        })

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
