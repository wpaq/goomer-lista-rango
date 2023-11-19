import app from '@/main/config/app'
import { TypeormHelper } from '@/infra/db/typeorm'
import { Restaurant } from '@/infra/db/typeorm/entities'

import request from 'supertest'
import { mockAddRestaurantParams } from '@/tests/domain/mocks'

let restaurantRepository

describe('Restaurant Routes', () => {
  beforeAll(async () => {
    await TypeormHelper.connect()
    restaurantRepository = TypeormHelper.client.getRepository(Restaurant)
  })

  afterEach(async () => {
    await restaurantRepository.delete({})
  })

  afterAll(async () => {
    await TypeormHelper.disconnect()
  })

  describe('POST /restaurant', () => {
    test('should return 200 on success', async () => {
      await request(app)
        .post('/api/restaurant')
        .send({
          photo: 'http://www.photo_1.com',
          name: 'Wallyson',
          address: 'Street Test',
          openingHours: '07:00'
        })
        .expect(200)
    })

    test('should return 400 if any field is not provided', async () => {
      await request(app)
        .post('/api/restaurant')
        .send({
          // photo: 'http://www.photo_1.com',
          name: 'Wallyson',
          address: 'Street Test',
          openingHours: '07:00'
        })
        .expect(400)
    })

    test('should return 400 if openingHours is invalid', async () => {
      await request(app)
        .post('/api/restaurant')
        .send({
          photo: 'http://www.photo_1.com',
          name: 'Wallyson',
          address: 'Street Test',
          openingHours: 'invalid_hours'
        })
        .expect(400)
    })
  })

  describe('GET /restaurant', () => {
    test('should return 204 if returns empty', async () => {
      await request(app)
        .get('/api/restaurant')
        .expect(204)
    })

    test('should return 200 on success', async () => {
      await restaurantRepository.insert(mockAddRestaurantParams())
      await request(app)
        .get('/api/restaurant')
        .expect(200)
    })
  })
})
