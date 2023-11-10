import { LogControllerDecorator } from '@/main/decorators'
import { type Controller } from '@/presentation/protocols'
import { LogErrorTypeormRepository } from '@/infra/db/typeorm'

export const makeLogControllerDecorator = (controller: Controller): Controller => {
  const logErrorTypeormRepository = new LogErrorTypeormRepository()
  return new LogControllerDecorator(controller, logErrorTypeormRepository)
}
