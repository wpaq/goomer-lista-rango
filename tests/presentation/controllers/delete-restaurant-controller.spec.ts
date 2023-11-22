import { CheckRestaurantByIdSpy } from '@/tests/presentation/mocks'

import { type HttpRequest } from '@/presentation/protocols'
import { DeleteRestaurantController } from '@/presentation/controllers'

import { faker } from '@faker-js/faker'

const mockRequest = (): HttpRequest => ({
  params: {
    restaurantId: faker.string.uuid()
  }
})

type SutTypes = {
  sut: DeleteRestaurantController
  checkRestaurantByIdSpy: CheckRestaurantByIdSpy
}

const makeSut = (): SutTypes => {
  const checkRestaurantByIdSpy = new CheckRestaurantByIdSpy()
  const sut = new DeleteRestaurantController(checkRestaurantByIdSpy)
  return {
    sut,
    checkRestaurantByIdSpy
  }
}

describe('DeleteRestaurant Controller', () => {
  test('Should call CheckRestaurantById with correct id', async () => {
    const { sut, checkRestaurantByIdSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(checkRestaurantByIdSpy.id).toEqual(request.params.restaurantId)
  })
})
