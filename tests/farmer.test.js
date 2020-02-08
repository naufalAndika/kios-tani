const request = require('supertest')
const app = require('../src/app')
const { merchantOne } = require('./fixtures/merchant')
const { setupDatabase } = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should save new farmer data', async () => {
    await request(app)
        .post('/farmers')
        .set('merchantAuth', `Bearer ${merchantOne.tokens[0].token}`)
        .send({
            name: 'Djoko Pramono',
            identityNumber: '3507131806990012',
            landArea: 1000,
        })
        .expect(201)
})
