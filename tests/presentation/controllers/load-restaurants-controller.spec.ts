import { LoadRestaurantsSpy } from '@/tests/presentation/mocks'

import { LoadRestaurantsController } from '@/presentation/controllers'
import { type HttpRequest } from '@/presentation/protocols'
import { noContent, ok, serverError } from '@/presentation/helpers'

import { faker } from '@faker-js/faker'

const mockRequest = (): HttpRequest => ({
  body: {
    photo: faker.image.url(),
    name: faker.person.fullName(),
    address: faker.location.streetAddress(),
    openingHours: faker.string.numeric(2)
  }
})

type SutTypes = {
  sut: LoadRestaurantsController
  loadRestaurantsSpy: LoadRestaurantsSpy
}

const makeSut = (): SutTypes => {
  const loadRestaurantsSpy = new LoadRestaurantsSpy()
  const sut = new LoadRestaurantsController(loadRestaurantsSpy)
  return {
    sut,
    loadRestaurantsSpy
  }
}

describe('LoadRestaurants Controller', () => {
  test('Should call LoadRestaurants', async () => {
    const { sut, loadRestaurantsSpy } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(loadRestaurantsSpy.result).toEqual(httpResponse.body)
  })

  test('Should return 500 if LoadRestaurants throws', async () => {
    const { sut, loadRestaurantsSpy } = makeSut()
    jest.spyOn(loadRestaurantsSpy, 'load').mockRejectedValueOnce(new Error())
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 200 if load success', async () => {
    const { sut, loadRestaurantsSpy } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(ok(loadRestaurantsSpy.result))
  })

  test('Should return 204 if LoadRestaurants returns empty', async () => {
    const { sut, loadRestaurantsSpy } = makeSut()
    loadRestaurantsSpy.result = []
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(noContent())
  })
})
