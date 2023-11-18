import { makeDbCheckRestaurantByIdUsecase, makeDbLoadRestaurantByIdUsecase } from '@/main/factories/usecases'
import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { LoadRestaurantByIdController } from '@/presentation/controllers'
import { type Controller } from '@/presentation/protocols'

export const makeLoadRestaurantByIdController = (): Controller => {
  const controller = new LoadRestaurantByIdController(makeDbCheckRestaurantByIdUsecase(), makeDbLoadRestaurantByIdUsecase())
  return makeLogControllerDecorator(controller)
}
