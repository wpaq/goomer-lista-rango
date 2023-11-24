import { ValidationSpy } from '@/tests/presentation/mocks'

import { type HttpRequest } from '@/presentation/protocols'
import { AddProductController } from '@/presentation/controllers'

import { faker } from '@faker-js/faker'

const mockRequest = (): HttpRequest => ({
  body: {
    photo: faker.image.url(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.productAdjective()
  }
})

type SutTypes = {
  sut: AddProductController
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const sut = new AddProductController(validationSpy)
  return {
    sut,
    validationSpy
  }
}

describe('AddProduct Controller', () => {
  test('Should call Validation with correct value', async () => {
    const { sut, validationSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(validationSpy.input).toEqual(request.body)
  })
})
