import { makeDbCheckProductByIdUsecase, makeDbDeleteProductUsecase } from '@/main/factories/usecases'
import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { DeleteProductController } from '@/presentation/controllers'
import { type Controller } from '@/presentation/protocols'

export const makeDeleteProductController = (): Controller => {
  const controller = new DeleteProductController(makeDbCheckProductByIdUsecase(), makeDbDeleteProductUsecase())
  return makeLogControllerDecorator(controller)
}
