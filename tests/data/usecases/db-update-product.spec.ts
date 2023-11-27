import { UpdateProductRepositorySpy } from '@/tests/data/mocks'
import { mockUpdateProductParams } from '@/tests/domain/mocks'

import { DbUpdateProduct } from '@/data/usecases'

import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: DbUpdateProduct
  updateProductRepositorySpy: UpdateProductRepositorySpy
}

const makeSut = (): SutTypes => {
  const updateProductRepositorySpy = new UpdateProductRepositorySpy()
  const sut = new DbUpdateProduct(updateProductRepositorySpy)
  return {
    sut,
    updateProductRepositorySpy
  }
}

describe('DbUpdateProduct', () => {
  test('Should call UpdateProductRepository with correct values', async () => {
    const { sut, updateProductRepositorySpy } = makeSut()
    const updateProductParams = mockUpdateProductParams()
    await sut.update(faker.string.uuid(), updateProductParams)
    expect(updateProductRepositorySpy.updateProductParams).toEqual(updateProductParams)
  })

  test('Should throw if UpdateProductRepository throws', async () => {
    const { sut, updateProductRepositorySpy } = makeSut()
    jest.spyOn(updateProductRepositorySpy, 'update').mockRejectedValueOnce(new Error())
    const response = sut.update(faker.string.uuid(), mockUpdateProductParams())
    await expect(response).rejects.toThrow()
  })
})
