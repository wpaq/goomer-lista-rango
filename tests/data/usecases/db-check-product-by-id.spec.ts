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
})