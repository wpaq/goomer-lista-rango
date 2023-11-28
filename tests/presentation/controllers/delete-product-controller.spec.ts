import { CheckProductByIdSpy, DeleteProductSpy } from '@/tests/presentation/mocks'

import { type HttpRequest } from '@/presentation/protocols'
import { DeleteProductController } from '@/presentation/controllers'
import { forbidden, noContent, serverError } from '@/presentation/helpers'
import { InvalidParamError } from '@/presentation/errors'

import { faker } from '@faker-js/faker'

const mockRequest = (): HttpRequest => ({
  params: {
    productId: faker.string.uuid()
  }
})

type SutTypes = {
  sut: DeleteProductController
  checkProductByIdSpy: CheckProductByIdSpy
  deleteProductSpy: DeleteProductSpy
}

const makeSut = (): SutTypes => {
  const checkProductByIdSpy = new CheckProductByIdSpy()
  const deleteProductSpy = new DeleteProductSpy()
  const sut = new DeleteProductController(checkProductByIdSpy, deleteProductSpy)
  return {
    sut,
    checkProductByIdSpy,
    deleteProductSpy
  }
}

describe('DeleteProduct Controller', () => {
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

  test('Should call DeleteProduct with correct id', async () => {
    const { sut, deleteProductSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(deleteProductSpy.id).toEqual(request.params.productId)
  })

  test('Should return 500 if DeleteProduct throws', async () => {
    const { sut, deleteProductSpy } = makeSut()
    jest.spyOn(deleteProductSpy, 'delete').mockRejectedValueOnce(new Error())
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 204 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(noContent())
  })
})
