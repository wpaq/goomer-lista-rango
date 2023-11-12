import { LoadRestaurantsSpy } from '@/tests/presentation/mocks'

import { type HttpRequest } from '@/presentation/protocols'
import { LoadRestaurantsController } from '@/presentation/controllers'

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
})
