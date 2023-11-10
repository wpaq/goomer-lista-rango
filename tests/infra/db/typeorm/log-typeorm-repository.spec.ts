import { LogErrorTypeormRepository, TypeormHelper } from '@/infra/db/typeorm'
import { LogError } from '@/infra/db/typeorm/entities'

import { faker } from '@faker-js/faker'

let logErrorRepository

const makeSut = (): LogErrorTypeormRepository => {
  return new LogErrorTypeormRepository()
}

describe('LogErrorTypeorm Repository', () => {
  beforeAll(async () => {
    await TypeormHelper.connect()
    logErrorRepository = TypeormHelper.client.getRepository(LogError)
  })

  beforeEach(async () => {
    await logErrorRepository.delete({})
  })

  afterAll(async () => {
    await TypeormHelper.disconnect()
  })

  test('Should create an error log on success', async () => {
    const sut = makeSut()
    const stack = faker.word.words()
    await sut.logError(stack)

    const count = await logErrorRepository.countBy({ stack })
    expect(count).toBe(1)
  })
})
