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

  test('Should throw if LoadRestaurantByIdRepository throws', async () => {
    const { sut, loadRestaurantByIdRepositorySpy } = makeSut()
    jest.spyOn(loadRestaurantByIdRepositorySpy, 'loadById').mockRejectedValueOnce(new Error())
    const response = sut.load(restaurantId)
    await expect(response).rejects.toThrow()
  })

  test('Should return an restaurant on success', async () => {
    const { sut, loadRestaurantByIdRepositorySpy } = makeSut()
    const result = await sut.load(restaurantId)
    expect(result).toEqual(loadRestaurantByIdRepositorySpy.result)
  })
})
