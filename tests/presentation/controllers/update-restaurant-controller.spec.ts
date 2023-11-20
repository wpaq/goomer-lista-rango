import { UpdateRestaurantSpy } from '@/tests/presentation/mocks'

import { type HttpRequest } from '@/presentation/protocols'
import { UpdateRestaurantController } from '@/presentation/controllers'

import { faker } from '@faker-js/faker'

const mockRequest = (): HttpRequest => ({
  body: {
    photo: faker.image.url(),
    name: faker.person.fullName(),
    address: faker.location.streetAddress(),
    openingHours: faker.string.numeric(2)
  },
  params: {
    restaurantId: faker.string.uuid()
  }
})

type SutTypes = {
  sut: UpdateRestaurantController
  updateRestaurantSpy: UpdateRestaurantSpy
}

const makeSut = (): SutTypes => {
  const updateRestaurantSpy = new UpdateRestaurantSpy()
  const sut = new UpdateRestaurantController(updateRestaurantSpy)
  return {
    sut,
    updateRestaurantSpy
  }
}

describe('UpdateRestaurant Controller', () => {
  test('Should call UpdateRestaurant with correct values', async () => {
    const { sut, updateRestaurantSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(updateRestaurantSpy.updateRestaurantParams).toEqual(request.body)
    expect(updateRestaurantSpy.id).toEqual(request.params.restaurantId)
  })
})
