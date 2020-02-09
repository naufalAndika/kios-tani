const Plant = require('../models/plant')

const create = async (data) => {
    const plant = new Plant(data)
    
    try {
        await plant.save()
        return {
            plant
        }
    } catch (e) {
        throw e
    }
}

const list = async () => {
    try {
        const plants = await Plant.find({})
        return {
            plants
        }
    } catch (e) {
        throw e
    }
}

module.exports = {
    create,
    list
}
