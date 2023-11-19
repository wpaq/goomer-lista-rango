import { UpdateRestaurantRepositorySpy } from '@/tests/data/mocks'

import { DbUpdateRestaurant } from '@/data/usecases'

import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: DbUpdateRestaurant
  updateRestaurantRepositorySpy: UpdateRestaurantRepositorySpy
}

const makeSut = (): SutTypes => {
  const updateRestaurantRepositorySpy = new UpdateRestaurantRepositorySpy()
  const sut = new DbUpdateRestaurant(updateRestaurantRepositorySpy)
  return {
    sut,
    updateRestaurantRepositorySpy
  }
}

let restaurantId: string

describe('DbUpdateRestaurant', () => {
  beforeEach(() => {
    restaurantId = faker.string.uuid()
  })

  test('Should call UpdateRestaurantRepository with correct id', async () => {
    const { sut, updateRestaurantRepositorySpy } = makeSut()
    await sut.update(restaurantId)
    expect(updateRestaurantRepositorySpy.id).toBe(restaurantId)
  })
})
