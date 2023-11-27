import { mockAddProductParams, mockAddRestaurantParams } from '@/tests/domain/mocks'

import { ProductTypeormRepository, TypeormHelper } from '@/infra/db/typeorm'
import { Product, Restaurant } from '@/infra/db/typeorm/entities'

import { Repository } from 'typeorm'

let productRepository: Repository<Product>
let restaurantRepository: Repository<Restaurant>

const mockRestaurantId = async (): Promise<string> => {
  const res = await restaurantRepository.insert(mockAddRestaurantParams())
  return res.raw[0].id
}

const makeSut = (): ProductTypeormRepository => {
  return new ProductTypeormRepository()
}

describe('ProductTypeormRepository', () => {
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

  describe('add()', () => {
    test('Should add an Product on success', async () => {
      const sut = makeSut()
      const addProductParams = mockAddProductParams()
      await sut.add(Object.assign({}, addProductParams, { restaurantId: await mockRestaurantId() }))
      const count = await productRepository.countBy({ name: addProductParams.name })
      expect(count).toBe(1)
    })
  })
})
