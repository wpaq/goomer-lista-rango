import { AddProductRepositorySpy, CheckRestaurantByIdRepositorySpy } from '@/tests/data/mocks'
import { mockAddProductParams } from '@/tests/domain/mocks'

import { DbAddProduct } from '@/data/usecases'

type SutTypes = {
  sut: DbAddProduct
  checkRestaurantByIdRepositorySpy: CheckRestaurantByIdRepositorySpy
  addProductRepositorySpy: AddProductRepositorySpy
}

const makeSut = (): SutTypes => {
  const checkRestaurantByIdRepositorySpy = new CheckRestaurantByIdRepositorySpy()
  const addProductRepositorySpy = new AddProductRepositorySpy()
  const sut = new DbAddProduct(checkRestaurantByIdRepositorySpy, addProductRepositorySpy)
  return {
    sut,
    checkRestaurantByIdRepositorySpy,
    addProductRepositorySpy
  }
}

describe('DbAddProduct usecase', () => {
  test('Should return false if CheckRestaurantByIdRepository returns false', async () => {
    const { sut, checkRestaurantByIdRepositorySpy } = makeSut()
    checkRestaurantByIdRepositorySpy.result = false
    const exists = await sut.add(mockAddProductParams())
    expect(exists).toBe(false)
  })

  test('Should call AddProductRepository with correct data', async () => {
    const { sut, addProductRepositorySpy } = makeSut()
    const addProductParams = mockAddProductParams()
    await sut.add(addProductParams)

    expect(addProductRepositorySpy.addProductParams).toMatchObject({
      photo: addProductParams.photo,
      name: addProductParams.name,
      price: addProductParams.price,
      category: addProductParams.category,
      restaurantId: addProductParams.restaurantId
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
