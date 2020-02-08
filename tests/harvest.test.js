const request = require('supertest')
const app = require('../src/app')
const { setupDatabase } = require('./fixtures/db')
const { merchantOne } = require('./fixtures/merchant')
const { growOne } = require('./fixtures/grow')

beforeEach(setupDatabase)

test('Should save harvest data', async () => {
    await request(app)
        .post('/harvests')
        .set('Authorization', `Bearer ${merchantOne.tokens[0].token}`)
        .send({
            grow: growOne._id,
            amount: 900
        })
        .expect(201)
})

test('Should calculate amount', async () => {
    const response = await request(app)
        .post('/harvests')
        .set('Authorization', `Bearer ${merchantOne.tokens[0].token}`)
        .send({
            grow: growOne._id,
            amount: 1200
        })
        .expect(201)

    expect(response.body.harvest.price).toEqual(0.5)
})
