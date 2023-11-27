import { CheckProductByIdSpy } from '@/tests/presentation/mocks'

import { type HttpRequest } from '@/presentation/protocols'
import { UpdateProductController } from '@/presentation/controllers'

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
}

const makeSut = (): SutTypes => {
  const checkProductByIdSpy = new CheckProductByIdSpy()
  const sut = new UpdateProductController(checkProductByIdSpy)
  return {
    sut,
    checkProductByIdSpy
  }
}

describe('UpdateProduct Controller', () => {
  test('Should call CheckProductById with correct id', async () => {
    const { sut, checkProductByIdSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(checkProductByIdSpy.id).toEqual(request.params.productId)
  })
})
