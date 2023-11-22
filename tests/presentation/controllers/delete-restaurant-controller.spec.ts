import { CheckRestaurantByIdSpy, DeleteRestaurantSpy } from '@/tests/presentation/mocks'

import { type HttpRequest } from '@/presentation/protocols'
import { DeleteRestaurantController } from '@/presentation/controllers'
import { forbidden, serverError } from '@/presentation/helpers'
import { InvalidParamError } from '@/presentation/errors'

import { faker } from '@faker-js/faker'

const mockRequest = (): HttpRequest => ({
  params: {
    restaurantId: faker.string.uuid()
  }
})

type SutTypes = {
  sut: DeleteRestaurantController
  checkRestaurantByIdSpy: CheckRestaurantByIdSpy
  deleteRestaurantSpy: DeleteRestaurantSpy
}

const makeSut = (): SutTypes => {
  const checkRestaurantByIdSpy = new CheckRestaurantByIdSpy()
  const deleteRestaurantSpy = new DeleteRestaurantSpy()
  const sut = new DeleteRestaurantController(checkRestaurantByIdSpy, deleteRestaurantSpy)
  return {
    sut,
    checkRestaurantByIdSpy,
    deleteRestaurantSpy
  }
}

describe('DeleteRestaurant Controller', () => {
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
    expect(httpResponse).toEqual(forbidden(new InvalidParamError('id')))
  })

  test('Should return 500 if CheckRestaurantById throws', async () => {
    const { sut, checkRestaurantByIdSpy } = makeSut()
    jest.spyOn(checkRestaurantByIdSpy, 'checkById').mockRejectedValueOnce(new Error())
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should call DeleteRestaurant with correct id', async () => {
    const { sut, deleteRestaurantSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(deleteRestaurantSpy.id).toEqual(request.params.restaurantId)
  })

  test('Should return 500 if DeleteRestaurant throws', async () => {
    const { sut, deleteRestaurantSpy } = makeSut()
    jest.spyOn(deleteRestaurantSpy, 'delete').mockRejectedValueOnce(new Error())
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
