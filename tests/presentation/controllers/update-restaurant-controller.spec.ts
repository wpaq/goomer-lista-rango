import { CheckRestaurantByIdSpy, UpdateRestaurantSpy } from '@/tests/presentation/mocks'

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
  checkRestaurantByIdSpy: CheckRestaurantByIdSpy
  updateRestaurantSpy: UpdateRestaurantSpy
}

const makeSut = (): SutTypes => {
  const checkRestaurantByIdSpy = new CheckRestaurantByIdSpy()
  const updateRestaurantSpy = new UpdateRestaurantSpy()
  const sut = new UpdateRestaurantController(checkRestaurantByIdSpy, updateRestaurantSpy)
  return {
    sut,
    checkRestaurantByIdSpy,
    updateRestaurantSpy
  }
}

describe('UpdateRestaurant Controller', () => {
  test('Should call CheckRestaurantById with correct id', async () => {
    const { sut, checkRestaurantByIdSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(checkRestaurantByIdSpy.id).toEqual(request.params.restaurantId)
  })

  test('Should call UpdateRestaurant with correct values', async () => {
    const { sut, updateRestaurantSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(updateRestaurantSpy.updateRestaurantParams).toEqual(request.body)
    expect(updateRestaurantSpy.id).toEqual(request.params.restaurantId)
  })
})
