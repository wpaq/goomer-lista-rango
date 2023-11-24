import { mockAddProductParams } from '@/tests/domain/mocks'

import { ProductTypeormRepository, TypeormHelper } from '@/infra/db/typeorm'
import { Product } from '@/infra/db/typeorm/entities'

import { Repository } from 'typeorm'

let productRepository: Repository<Product>

const makeSut = (): ProductTypeormRepository => {
  return new ProductTypeormRepository()
}

describe('ProductTypeormRepository', () => {
  beforeAll(async () => {
    await TypeormHelper.connect()
    productRepository = TypeormHelper.client.getRepository(Product)
  })

  afterEach(async () => {
    await productRepository.delete({})
  })

  afterAll(async () => {
    await TypeormHelper.disconnect()
  })

  describe('add()', () => {
    test('Should add an Product on success', async () => {
      const sut = makeSut()
      const addProductParams = mockAddProductParams()
      await sut.add(addProductParams)
      const count = await productRepository.countBy({ name: addProductParams.name })
      expect(count).toBe(1)
    })
  })
})
