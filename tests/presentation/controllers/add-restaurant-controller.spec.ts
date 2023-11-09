import { AddRestaurantSpy, ValidationSpy } from '@/tests/presentation/mocks'

import { type HttpRequest } from '@/presentation/protocols'
import { AddRestaurantController } from '@/presentation/controllers'
import { badRequest } from '@/presentation/helpers'
import { MissingParamError } from '@/presentation/errors'

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
  sut: AddRestaurantController
  addRestaurantSpy: AddRestaurantSpy
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const addRestaurantSpy = new AddRestaurantSpy()
  const validationSpy = new ValidationSpy()
  const sut = new AddRestaurantController(addRestaurantSpy, validationSpy)
  return {
    sut,
    addRestaurantSpy,
    validationSpy
  }
}

describe('AddRestaurant Controller', () => {
  test('Should call Validation with correct value', async () => {
    const { sut, validationSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(validationSpy.input).toEqual(request.body)
  })

  test('Should return 400 if Validation returns an error', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.error = new MissingParamError(faker.word.words())
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(badRequest(validationSpy.error))
  })
})
