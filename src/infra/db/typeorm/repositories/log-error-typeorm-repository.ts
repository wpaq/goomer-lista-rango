import { type LogErrorRepository } from '@/data/protocols'
import { LogError } from '@/infra/db/typeorm/entities'
import { TypeormHelper } from '@/infra/db/typeorm/helpers'

export class LogErrorTypeormRepository implements LogErrorRepository {
  async logError (stack: string): Promise<void> {
    const logErrorRepository = TypeormHelper.client.getRepository(LogError)
    const newLogError = logErrorRepository.create({
      stack,
      date: new Date()
    })
    await logErrorRepository.save(newLogError)
  }
}
