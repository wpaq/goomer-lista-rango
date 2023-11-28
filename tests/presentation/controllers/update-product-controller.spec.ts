import { CheckProductByIdSpy, UpdateProductSpy } from '@/tests/presentation/mocks'

import { type HttpRequest } from '@/presentation/protocols'
import { UpdateProductController } from '@/presentation/controllers'
import { forbidden, ok, serverError } from '@/presentation/helpers'
import { InvalidParamError } from '@/presentation/errors'

import { faker } from '@faker-js/faker'

const mockRequest = (): HttpRequest => ({
  body: {
    photo: faker.image.url(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    category: faker.commerce.productAdjective(),
    restaurantId: faker.string.uuid()
  },
  params: {
    productId: faker.string.uuid()
  }
})

type SutTypes = {
  sut: UpdateProductController
  checkProductByIdSpy: CheckProductByIdSpy
  updateProductSpy: UpdateProductSpy
}

const makeSut = (): SutTypes => {
  const checkProductByIdSpy = new CheckProductByIdSpy()
  const updateProductSpy = new UpdateProductSpy()
  const sut = new UpdateProductController(checkProductByIdSpy, updateProductSpy)
  return {
    sut,
    checkProductByIdSpy,
    updateProductSpy
  }
}

describe('UpdateProduct Controller', () => {
  test('Should call CheckProductById with correct id', async () => {
    const { sut, checkProductByIdSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(checkProductByIdSpy.id).toEqual(request.params.productId)
  })

  test('Should return 403 if CheckProductById returns false', async () => {
    const { sut, checkProductByIdSpy } = makeSut()
    checkProductByIdSpy.result = false
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(forbidden(new InvalidParamError('id')))
  })

  test('Should return 500 if CheckProductById throws', async () => {
    const { sut, checkProductByIdSpy } = makeSut()
    jest.spyOn(checkProductByIdSpy, 'checkById').mockRejectedValueOnce(new Error())
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should call UpdateProduct with correct values', async () => {
    const { sut, updateProductSpy } = makeSut()
    const request = mockRequest()
    const { restaurantId, ...bodyWithoutRestaurantId } = request.body
    await sut.handle(request)
    expect(updateProductSpy.updateProductParams).toEqual(bodyWithoutRestaurantId)
    expect(updateProductSpy.id).toEqual(request.params.productId)
  })

  test('Should return 500 if UpdateProduct throws', async () => {
    const { sut, updateProductSpy } = makeSut()
    jest.spyOn(updateProductSpy, 'update').mockRejectedValueOnce(new Error())
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 200 on success', async () => {
    const { sut, updateProductSpy } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(ok(updateProductSpy.result))
  })
})
