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
})
