import { mockAddProductParams, mockAddRestaurantParams, mockUpdateProductParams } from '@/tests/domain/mocks'

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

  describe('update()', () => {
    test('Should return an product on success', async () => {
      const restaurant = await restaurantRepository.insert(mockAddRestaurantParams())
      const product = await productRepository.insert(Object.assign({}, mockAddProductParams(), { restaurantId: restaurant.raw[0].id }))
      const sut = makeSut()
      const updateProductParams = mockUpdateProductParams()
      const updatedProduct = await sut.update(product.raw[0].id, updateProductParams)
      expect(updatedProduct.id).toBeTruthy()
      expect(updatedProduct.photo).toBe(updateProductParams.photo)
    })
  })
})
