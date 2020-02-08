const request = require('supertest')
const app = require('../src/app')
const { merchantOne } = require('./fixtures/merchant')
const { setupDatabase } = require('./fixtures/db')
const { plantOne, plantTwo, plantThree } = require('./fixtures/plant')
const { farmerOne } = require('./fixtures/farmer')

beforeEach(setupDatabase)

test('Should save new grow data', async () => {
    await request(app)
        .post('/grows')
        .set('Authorization', `Bearer ${merchantOne.tokens[0].token}`)
        .send({
            plant: plantOne._id,
            landArea: 5000,
            farmer: farmerOne._id
        })
        .expect(201)
})
