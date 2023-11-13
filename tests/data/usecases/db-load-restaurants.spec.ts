import { LoadRestaurantsRepositorySpy } from '@/tests/data/mocks'

import { DbLoadRestaurants } from '@/data/usecases'

type SutTypes = {
  sut: DbLoadRestaurants
  loadRestaurantsRepositorySpy: LoadRestaurantsRepositorySpy
}

const makeSut = (): SutTypes => {
  const loadRestaurantsRepositorySpy = new LoadRestaurantsRepositorySpy()
  const sut = new DbLoadRestaurants(loadRestaurantsRepositorySpy)
  return {
    sut,
    loadRestaurantsRepositorySpy
  }
}

describe('DbLoadRestaurants', () => {
  test('Should return a list of restaurants on success', async () => {
    const { sut, loadRestaurantsRepositorySpy } = makeSut()
    const restaurants = await sut.load()
    expect(restaurants).toEqual(loadRestaurantsRepositorySpy.result)
  })

  test('Should throw if LoadRestaurantsRepository throws', async () => {
    const { sut, loadRestaurantsRepositorySpy } = makeSut()
    jest.spyOn(loadRestaurantsRepositorySpy, 'loadAll').mockRejectedValueOnce(new Error())
    const promise = sut.load()
    await expect(promise).rejects.toThrow()
  })
})
