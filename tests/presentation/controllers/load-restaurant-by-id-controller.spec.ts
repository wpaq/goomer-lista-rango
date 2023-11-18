import { CheckRestaurantByIdSpy, LoadRestaurantByIdSpy } from '@/tests/presentation/mocks'

import { LoadRestaurantByIdController } from '@/presentation/controllers'
import { type HttpRequest } from '@/presentation/protocols'
import { InvalidParamError } from '@/presentation/errors'
import { forbidden, serverError } from '@/presentation/helpers'

import { faker } from '@faker-js/faker'

const mockRequest = (): HttpRequest => ({
  params: {
    restaurantId: faker.string.uuid()
  }
})

type SutTypes = {
  sut: LoadRestaurantByIdController
  checkRestaurantByIdSpy: CheckRestaurantByIdSpy
  loadRestaurantByIdSpy: LoadRestaurantByIdSpy
}

const makeSut = (): SutTypes => {
  const checkRestaurantByIdSpy = new CheckRestaurantByIdSpy()
  const loadRestaurantByIdSpy = new LoadRestaurantByIdSpy()
  const sut = new LoadRestaurantByIdController(checkRestaurantByIdSpy, loadRestaurantByIdSpy)
  return {
    sut,
    checkRestaurantByIdSpy,
    loadRestaurantByIdSpy
  }
}

describe('LoadRestaurantById Controller', () => {
  test('Should call CheckRestaurantById with correct id', async () => {
    const { sut, checkRestaurantByIdSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(checkRestaurantByIdSpy.id).toEqual(request.params.restaurantId)
  })

  test('Should return 403 if CheckRestaurantById returns false', async () => {
    const { sut, checkRestaurantByIdSpy } = makeSut()
    checkRestaurantByIdSpy.result = false
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(forbidden(new InvalidParamError('restaurantId')))
  })

  test('Should return 500 if CheckRestaurantById throws', async () => {
    const { sut, checkRestaurantByIdSpy } = makeSut()
    jest.spyOn(checkRestaurantByIdSpy, 'checkById').mockRejectedValueOnce(new Error())
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should call LoadRestaurantById with correct id', async () => {
    const { sut, loadRestaurantByIdSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(loadRestaurantByIdSpy.id).toEqual(request.params.restaurantId)
  })
})
