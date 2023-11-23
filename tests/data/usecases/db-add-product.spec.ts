import { AddProductRepositorySpy } from '@/tests/data/mocks'
import { mockAddProductParams } from '@/tests/domain/mocks'

import { DbAddProduct } from '@/data/usecases'

type SutTypes = {
  sut: DbAddProduct
  addProductRepositorySpy: AddProductRepositorySpy
}

const makeSut = (): SutTypes => {
  const addProductRepositorySpy = new AddProductRepositorySpy()
  const sut = new DbAddProduct(addProductRepositorySpy)
  return {
    sut,
    addProductRepositorySpy
  }
}

describe('DbAddProduct usecase', () => {
  test('Should call AddProductRepository with correct data', async () => {
    const { sut, addProductRepositorySpy } = makeSut()
    const addProductParams = mockAddProductParams()
    await sut.add(addProductParams)

    expect(addProductRepositorySpy.addProductParams).toMatchObject({
      photo: addProductParams.photo,
      name: addProductParams.name,
      price: addProductParams.price,
      category: addProductParams.category
    })
  })

  test('Should throw if AddProductRepository throws', async () => {
    const { sut, addProductRepositorySpy } = makeSut()
    jest.spyOn(addProductRepositorySpy, 'add').mockRejectedValueOnce(new Error())
    const response = sut.add(mockAddProductParams())
    await expect(response).rejects.toThrow()
  })

  test('Should return an product on success', async () => {
    const { sut, addProductRepositorySpy } = makeSut()
    const result = await sut.add(mockAddProductParams())
    expect(result).toEqual(addProductRepositorySpy.result)
  })
})
