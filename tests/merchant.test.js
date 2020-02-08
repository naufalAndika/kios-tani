const request = require('supertest')
const app = require('../src/app')
const { setupDatabase } = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should signup a new user', async () => {
    await request(app).post('/merchants').send({
        name: 'Kios Tani Mandiri',
        email: 'kiostanimandiri@gmail.com',
        password: 'kiostanimandiri',
        address: 'Jalan Veteran no 56 Donowarih Malang',
        phone: '081234567890'
    }).expect(201)
})
