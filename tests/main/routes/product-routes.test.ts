import { mockAddProductParams, mockAddRestaurantParams } from '@/tests/domain/mocks'

import app from '@/main/config/app'
import { TypeormHelper } from '@/infra/db/typeorm'
import { Product, Restaurant } from '@/infra/db/typeorm/entities'

import { Repository } from 'typeorm'
import request from 'supertest'
import { faker } from '@faker-js/faker'

let productRepository: Repository<Product>
let restaurantRepository: Repository<Restaurant>

const mockRestaurantId = async (): Promise<string> => {
  const restaurant = await restaurantRepository.insert(mockAddRestaurantParams())
  return restaurant.raw[0].id
}

const mockProductId = async (): Promise<string> => {
  const product = await productRepository.insert(Object.assign({}, mockAddProductParams(), { restaurantId: await mockRestaurantId() }))
  return product.raw[0].id
}

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
      await request(app)
        .post('/api/product')
        .send({
          // photo: 'http://www.photo_1.com',
          name: 'Potato Chips',
          price: '10.00',
          category: 'Food',
          restaurantId: await mockRestaurantId()
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
      await request(app)
        .post('/api/product')
        .send({
          photo: 'http://www.photo_1.com',
          name: 'Potato Chips',
          price: '10.00',
          category: 'Food',
          restaurantId: await mockRestaurantId()
        })
        .expect(200)
    })
  })

  describe('PUT /product/:productId', () => {
    test('should return 403 if invalid id is provided', async () => {
      await request(app)
        .put(`/api/product/${faker.string.uuid()}`)
        .send({
          photo: faker.image.url(),
          name: 'Tomato',
          price: '15.10'
        })
        .expect(403)
    })

    test('should return 200 on success', async () => {
      await request(app)
        .put(`/api/product/${await mockProductId()}`)
        .send({
          photo: faker.image.url(),
          name: 'Wallyson',
          price: '5.99'
        })
        .expect(200)
    })
  })

  describe('DELETE /product/:productId', () => {
    test('should return 403 if invalid id is provided', async () => {
      await request(app)
        .delete(`/api/product/${faker.string.uuid()}`)
        .expect(403)
    })

    test('should return 204 on success', async () => {
      await request(app)
        .delete(`/api/product/${await mockProductId()}`)
        .expect(204)
    })
  })
})
