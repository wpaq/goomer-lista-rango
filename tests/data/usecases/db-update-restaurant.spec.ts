import { UpdateRestaurantRepositorySpy } from '@/tests/data/mocks'
import { mockUpdateRestaurantParams } from '@/tests/domain/mocks'

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

describe('DbUpdateRestaurant', () => {
  test('Should call UpdateRestaurantRepository with correct values', async () => {
    const { sut, updateRestaurantRepositorySpy } = makeSut()
    const updateRestaurantParams = mockUpdateRestaurantParams()
    await sut.update(faker.string.uuid(), updateRestaurantParams)
    expect(updateRestaurantRepositorySpy.updateRestaurantParams).toEqual(updateRestaurantParams)
  })

  test('Should throw if UpdateRestaurantRepository throws', async () => {
    const { sut, updateRestaurantRepositorySpy } = makeSut()
    jest.spyOn(updateRestaurantRepositorySpy, 'update').mockRejectedValueOnce(new Error())
    const response = sut.update(faker.string.uuid(), mockUpdateRestaurantParams())
    await expect(response).rejects.toThrow()
  })

  test('Should return an restaurant on success', async () => {
    const { sut, updateRestaurantRepositorySpy } = makeSut()
    const result = await sut.update(faker.string.uuid(), mockUpdateRestaurantParams())
    expect(result).toEqual(updateRestaurantRepositorySpy.result)
  })
})
