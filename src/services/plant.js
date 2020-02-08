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

module.exports = {
    create
}
