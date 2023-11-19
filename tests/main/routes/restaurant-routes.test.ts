import app from '@/main/config/app'
import { TypeormHelper } from '@/infra/db/typeorm'
import { Restaurant } from '@/infra/db/typeorm/entities'

import request from 'supertest'

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
    test('should return an restaurant on success', async () => {
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
  })
})
