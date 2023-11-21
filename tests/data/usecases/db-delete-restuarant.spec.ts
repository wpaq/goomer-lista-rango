import { DeleteRestaurantRepositorySpy } from '@/tests/data/mocks'

import { DbDeleteRestaurant } from '@/data/usecases'

import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: DbDeleteRestaurant
  deleteRestaurantRepositorySpy: DeleteRestaurantRepositorySpy
}

const makeSut = (): SutTypes => {
  const deleteRestaurantRepositorySpy = new DeleteRestaurantRepositorySpy()
  const sut = new DbDeleteRestaurant(deleteRestaurantRepositorySpy)
  return {
    sut,
    deleteRestaurantRepositorySpy
  }
}

let restaurantId: string

describe('DbDeleteRestaurant', () => {
  beforeEach(() => {
    restaurantId = faker.string.uuid()
  })

  test('Should call DeleteRestaurantRepository with correct id', async () => {
    const { sut, deleteRestaurantRepositorySpy } = makeSut()
    await sut.delete(restaurantId)
    expect(deleteRestaurantRepositorySpy.id).toEqual(restaurantId)
  })
})
