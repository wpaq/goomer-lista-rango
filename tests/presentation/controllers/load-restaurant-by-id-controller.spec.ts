import { CheckRestaurantByIdSpy } from '@/tests/presentation/mocks'

import { LoadRestaurantByIdController } from '@/presentation/controllers'
import { type HttpRequest } from '@/presentation/protocols'

import { faker } from '@faker-js/faker'

const mockRequest = (): HttpRequest => ({
  params: {
    restaurantId: faker.string.uuid()
  }
})

type SutTypes = {
  sut: LoadRestaurantByIdController
  checkRestaurantByIdSpy: CheckRestaurantByIdSpy
}

const makeSut = (): SutTypes => {
  const checkRestaurantByIdSpy = new CheckRestaurantByIdSpy()
  const sut = new LoadRestaurantByIdController(checkRestaurantByIdSpy)
  return {
    sut,
    checkRestaurantByIdSpy
  }
}

describe('LoadRestaurantById Controller', () => {
  test('Should call CheckRestaurantById with correct id', async () => {
    const { sut, checkRestaurantByIdSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(checkRestaurantByIdSpy.id).toEqual(request.params.restaurantId)
  })
})
