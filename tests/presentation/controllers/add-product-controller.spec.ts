import { AddProductSpy, ValidationSpy } from '@/tests/presentation/mocks'

import { type HttpRequest } from '@/presentation/protocols'
import { AddProductController } from '@/presentation/controllers'
import { MissingParamError } from '@/presentation/errors'
import { badRequest, serverError } from '@/presentation/helpers'

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
  addProductSpy: AddProductSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const addProductSpy = new AddProductSpy()
  const sut = new AddProductController(validationSpy, addProductSpy)
  return {
    sut,
    validationSpy,
    addProductSpy
  }
}

describe('AddProduct Controller', () => {
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

  test('Should call AddProduct with correct values', async () => {
    const { sut, addProductSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(addProductSpy.addProductParams).toEqual(request.body)
  })

  test('Should return 500 if AddProduct throws', async () => {
    const { sut, addProductSpy } = makeSut()
    jest.spyOn(addProductSpy, 'add').mockRejectedValueOnce(new Error())
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
