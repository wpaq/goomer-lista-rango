import { AddRestaurantRepositorySpy } from '@/tests/data/mocks'
import { mockAddRestaurantParams } from '@/tests/domain/mocks'

import { DbAddRestaurant } from '@/data/usecases'

type SutTypes = {
  sut: DbAddRestaurant
  addRestaurantRepositorySpy: AddRestaurantRepositorySpy
}

const makeSut = (): SutTypes => {
  const addRestaurantRepositorySpy = new AddRestaurantRepositorySpy()
  const sut = new DbAddRestaurant(addRestaurantRepositorySpy)
  return {
    sut,
    addRestaurantRepositorySpy
  }
}

describe('DbAddRestaurant usecase', () => {
  test('Should call AddRestaurantRepository with correct data', async () => {
    const { sut, addRestaurantRepositorySpy } = makeSut()
    const addRestaurantParams = mockAddRestaurantParams()
    await sut.add(addRestaurantParams)

    expect(addRestaurantRepositorySpy.addRestaurantParams).toEqual({
      photo: addRestaurantParams.photo,
      name: addRestaurantParams.name,
      address: addRestaurantParams.address,
      openingHours: addRestaurantParams.openingHours
    })
  })

  test('Should throw if AddRestaurantRepository throws', async () => {
    const { sut, addRestaurantRepositorySpy } = makeSut()
    jest.spyOn(addRestaurantRepositorySpy, 'add').mockRejectedValueOnce(new Error())
    const response = sut.add(mockAddRestaurantParams())
    await expect(response).rejects.toThrow()
  })

  test('Should return an restaurant on success', async () => {
    const { sut, addRestaurantRepositorySpy } = makeSut()
    const result = await sut.add(mockAddRestaurantParams())
    expect(result).toEqual(addRestaurantRepositorySpy.result)
  })
})
