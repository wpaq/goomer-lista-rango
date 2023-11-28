import { DeleteProductRepositorySpy } from '@/tests/data/mocks'

import { DbDeleteProduct } from '@/data/usecases'

import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: DbDeleteProduct
  deleteProductRepositorySpy: DeleteProductRepositorySpy
}

const makeSut = (): SutTypes => {
  const deleteProductRepositorySpy = new DeleteProductRepositorySpy()
  const sut = new DbDeleteProduct(deleteProductRepositorySpy)
  return {
    sut,
    deleteProductRepositorySpy
  }
}

let productId: string

describe('DbDeleteProduct', () => {
  beforeEach(() => {
    productId = faker.string.uuid()
  })

  test('Should call DeleteProductRepository with correct id', async () => {
    const { sut, deleteProductRepositorySpy } = makeSut()
    await sut.delete(productId)
    expect(deleteProductRepositorySpy.id).toEqual(productId)
  })

  test('Should throw if DeleteProductRepository throws', async () => {
    const { sut, deleteProductRepositorySpy } = makeSut()
    jest.spyOn(deleteProductRepositorySpy, 'delete').mockRejectedValueOnce(new Error())
    const promise = sut.delete(productId)
    await expect(promise).rejects.toThrow()
  })

  test('Should return undefined on success', async () => {
    const { sut } = makeSut()
    const promise = sut.delete(productId)
    await expect(promise).resolves.toBeUndefined()
  })
})
