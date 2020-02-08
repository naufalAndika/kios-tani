const Harvest = require('../models/harvest')

const create = async (data) => {
    const harvest = new Harvest(data)
    try {
        await harvest.save()
        console.log(harvest);
        
        await harvest.populate('grow').execPopulate()

        harvest.price = harvest.amount / harvest.grow.estimation        
        await harvest.save()
        return {
            harvest
        }
    } catch (e) {
        throw e
    }
}

module.exports = {
    create
}
