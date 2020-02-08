const request = require('supertest')
const app = require('../src/app')
const { setupDatabase } = require('./fixtures/db')
const { plantOne, plantTwo, plantThree } = require('./fixtures/plant')

beforeEach(setupDatabase)

test('Should save new plant data', async () => {
    await request(app)
        .post('/plants')
        .send(plantTwo)
        .expect(201)
})
