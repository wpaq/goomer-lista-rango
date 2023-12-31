import { mockAddRestaurantParams } from '@/tests/domain/mocks'

import app from '@/main/config/app'
import { TypeormHelper } from '@/infra/db/typeorm'
import { Restaurant } from '@/infra/db/typeorm/entities'

import { Repository } from 'typeorm'
import request from 'supertest'
import { faker } from '@faker-js/faker'

let restaurantRepository: Repository<Restaurant>

const mockRestaurantId = async (): Promise<string> => {
  const restaurant = await restaurantRepository.insert(mockAddRestaurantParams())
  return restaurant.raw[0].id
}

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
        .send(mockAddRestaurantParams())
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

  describe('GET /restaurant/:restaurantId', () => {
    test('should return 200 on load restaurant with id', async () => {
      await request(app)
        .get(`/api/restaurant/${await mockRestaurantId()}`)
        .expect(200)
    })

    test('should return 403 if invalid id is provided', async () => {
      await request(app)
        .get(`/api/restaurant/${faker.string.uuid()}`)
        .expect(403)
    })
  })

  describe('PUT /restaurant/:restaurantId', () => {
    test('should return 200 on success', async () => {
      await request(app)
        .put(`/api/restaurant/${await mockRestaurantId()}`)
        .send(mockAddRestaurantParams())
        .expect(200)
    })

    test('should return 403 if invalid id is provided', async () => {
      await request(app)
        .put(`/api/restaurant/${faker.string.uuid()}`)
        .send(mockAddRestaurantParams())
        .expect(403)
    })
  })

  describe('DELETE /restaurant/:restaurantId', () => {
    test('should return 403 if invalid id is provided', async () => {
      await request(app)
        .delete(`/api/restaurant/${faker.string.uuid()}`)
        .expect(403)
    })

    test('should return 204 on success', async () => {
      await request(app)
        .delete(`/api/restaurant/${await mockRestaurantId()}`)
        .expect(204)
    })
  })
})
