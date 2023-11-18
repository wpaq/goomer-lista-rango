import { CheckRestaurantByIdRepositorySpy } from '@/tests/data/mocks'

import { DbCheckRestaurantById } from '@/data/usecases'

import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: DbCheckRestaurantById
  checkRestaurantByIdRepositorySpy: CheckRestaurantByIdRepositorySpy
}

const makeSut = (): SutTypes => {
  const checkRestaurantByIdRepositorySpy = new CheckRestaurantByIdRepositorySpy()
  const sut = new DbCheckRestaurantById(checkRestaurantByIdRepositorySpy)
  return {
    sut,
    checkRestaurantByIdRepositorySpy
  }
}

let restaurantId: string

describe('DbCheckRestaurantById', () => {
  beforeEach(() => {
    restaurantId = faker.string.uuid()
  })

  test('Should call CheckRestaurantByIdRepository with correct id', async () => {
    const { sut, checkRestaurantByIdRepositorySpy } = makeSut()
    await sut.checkById(restaurantId)
    expect(checkRestaurantByIdRepositorySpy.id).toBe(restaurantId)
  })

  test('Should return false if CheckRestaurantByIdRepository returns false', async () => {
    const { sut, checkRestaurantByIdRepositorySpy } = makeSut()
    checkRestaurantByIdRepositorySpy.result = false
    const exists = await sut.checkById(restaurantId)
    expect(exists).toBe(false)
  })
})
