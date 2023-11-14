import { LoadRestaurantByIdRepositorySpy } from '@/tests/data/mocks'

import { DbLoadRestaurantById } from '@/data/usecases'

import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: DbLoadRestaurantById
  loadRestaurantByIdRepositorySpy: LoadRestaurantByIdRepositorySpy
}

const makeSut = (): SutTypes => {
  const loadRestaurantByIdRepositorySpy = new LoadRestaurantByIdRepositorySpy()
  const sut = new DbLoadRestaurantById(loadRestaurantByIdRepositorySpy)
  return {
    sut,
    loadRestaurantByIdRepositorySpy
  }
}

let restaurantId: string

describe('DbLoadRestaurantById', () => {
  beforeEach(() => {
    restaurantId = faker.string.uuid()
  })

  test('Should call LoadRestaurantByIdRepository with correct id', async () => {
    const { sut, loadRestaurantByIdRepositorySpy } = makeSut()
    await sut.load(restaurantId)
    expect(loadRestaurantByIdRepositorySpy.id).toBe(restaurantId)
  })
})
