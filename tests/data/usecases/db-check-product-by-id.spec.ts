import { CheckProductByIdRepositorySpy } from '@/tests/data/mocks'

import { DbCheckProductById } from '@/data/usecases'

import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: DbCheckProductById
  checkProductByIdRepositorySpy: CheckProductByIdRepositorySpy
}

const makeSut = (): SutTypes => {
  const checkProductByIdRepositorySpy = new CheckProductByIdRepositorySpy()
  const sut = new DbCheckProductById(checkProductByIdRepositorySpy)
  return {
    sut,
    checkProductByIdRepositorySpy
  }
}

let productId: string

describe('DbCheckProductById', () => {
  beforeEach(() => {
    productId = faker.string.uuid()
  })

  test('Should call CheckProductByIdRepository with correct id', async () => {
    const { sut, checkProductByIdRepositorySpy } = makeSut()
    await sut.checkById(productId)
    expect(checkProductByIdRepositorySpy.id).toBe(productId)
  })

  test('Should return false if CheckProductByIdRepository returns false', async () => {
    const { sut, checkProductByIdRepositorySpy } = makeSut()
    checkProductByIdRepositorySpy.result = false
    const exists = await sut.checkById(productId)
    expect(exists).toBe(false)
  })

  test('Should return true if CheckProductByIdRepository returns true', async () => {
    const { sut } = makeSut()
    const exists = await sut.checkById(productId)
    expect(exists).toBe(true)
  })

  test('Should throw if CheckProductByIdRepository throws', async () => {
    const { sut, checkProductByIdRepositorySpy } = makeSut()
    jest.spyOn(checkProductByIdRepositorySpy, 'checkById').mockRejectedValueOnce(new Error())
    const promise = sut.checkById(productId)
    await expect(promise).rejects.toThrow()
  })
})
