import { mockAddRestaurantParams } from '@/tests/domain/mocks'

import app from '@/main/config/app'
import { TypeormHelper } from '@/infra/db/typeorm'
import { Product, Restaurant } from '@/infra/db/typeorm/entities'

import { Repository } from 'typeorm'
import request from 'supertest'
import { faker } from '@faker-js/faker'

let productRepository: Repository<Product>
let restaurantRepository: Repository<Restaurant>

describe('Product Routes', () => {
  beforeAll(async () => {
    await TypeormHelper.connect()
    productRepository = TypeormHelper.client.getRepository(Product)
    restaurantRepository = TypeormHelper.client.getRepository(Restaurant)
  })

  afterEach(async () => {
    await productRepository.delete({})
    await restaurantRepository.delete({})
  })

  afterAll(async () => {
    await TypeormHelper.disconnect()
  })

  describe('POST /product', () => {
    test('should return 400 if an required field is not provided', async () => {
      const restaurant = await restaurantRepository.insert(mockAddRestaurantParams())

      await request(app)
        .post('/api/product')
        .send({
          // photo: 'http://www.photo_1.com',
          name: 'Potato Chips',
          price: '10.00',
          category: 'Food',
          restaurantId: restaurant.raw[0].id
        })
        .expect(400)
    })

    test('should return 403 if invalid restaurantId is provided', async () => {
      await request(app)
        .post('/api/product')
        .send({
          photo: 'http://www.photo_1.com',
          name: 'Potato Chips',
          price: '10.00',
          category: 'Food',
          restaurantId: faker.string.uuid()
        })
        .expect(403)
    })

    test('should return 200 on success', async () => {
      const restaurant = await restaurantRepository.insert(mockAddRestaurantParams())

      await request(app)
        .post('/api/product')
        .send({
          photo: 'http://www.photo_1.com',
          name: 'Potato Chips',
          price: '10.00',
          category: 'Food',
          restaurantId: restaurant.raw[0].id
        })
        .expect(200)
    })
  })
})
