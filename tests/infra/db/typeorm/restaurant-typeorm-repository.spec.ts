import { mockAddRestaurantParams } from '@/tests/domain/mocks'

import { RestaurantTypeormRepository, TypeormHelper } from '@/infra/db/typeorm'
import { Restaurant } from '@/infra/db/typeorm/entities'
import { type ObjectLiteral, type Repository } from 'typeorm'

let restaurantRepository: Repository<ObjectLiteral>

const makeSut = (): RestaurantTypeormRepository => {
  return new RestaurantTypeormRepository()
}

describe('RestaurantTypeormRepository', () => {
  beforeAll(async () => {
    await TypeormHelper.connect('test')
    restaurantRepository = TypeormHelper.client.getRepository(Restaurant)
  })

  afterEach(async () => {
    await restaurantRepository.delete({})
  })

  afterAll(async () => {
    await TypeormHelper.disconnect()
  })

  describe('add()', () => {
    test('Should add an restaurant on success', async () => {
      const sut = makeSut()
      const addRestaurantParams = mockAddRestaurantParams()
      await sut.add(addRestaurantParams)
      const count = await restaurantRepository.countBy({ name: addRestaurantParams.name })
      expect(count).toBe(1)
    })
  })
})
