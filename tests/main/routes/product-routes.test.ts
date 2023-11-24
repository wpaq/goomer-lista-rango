import app from '@/main/config/app'
import { TypeormHelper } from '@/infra/db/typeorm'
import { Product } from '@/infra/db/typeorm/entities'

import request from 'supertest'
import { Repository } from 'typeorm'

let ProductRepository: Repository<Product>

describe('Product Routes', () => {
  beforeAll(async () => {
    await TypeormHelper.connect()
    ProductRepository = TypeormHelper.client.getRepository(Product)
  })

  afterEach(async () => {
    await ProductRepository.delete({})
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
          category: 'Food'
        })
        .expect(400)
    })
  })
})
