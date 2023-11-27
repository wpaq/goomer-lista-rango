import { makeDbCheckProductByIdUsecase, makeDbUpdateProductUsecase } from '@/main/factories/usecases'
import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { UpdateProductController } from '@/presentation/controllers'
import { type Controller } from '@/presentation/protocols'

export const makeUpdateProductController = (): Controller => {
  const controller = new UpdateProductController(makeDbCheckProductByIdUsecase(), makeDbUpdateProductUsecase())
  return makeLogControllerDecorator(controller)
}
