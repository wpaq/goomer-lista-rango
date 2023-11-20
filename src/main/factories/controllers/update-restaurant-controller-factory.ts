import { makeDbCheckRestaurantByIdUsecase, makeDbUpdateRestaurantUsecase } from '@/main/factories/usecases'
import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { UpdateRestaurantController } from '@/presentation/controllers'
import { type Controller } from '@/presentation/protocols'

export const makeUpdateRestaurantController = (): Controller => {
  const controller = new UpdateRestaurantController(makeDbCheckRestaurantByIdUsecase(), makeDbUpdateRestaurantUsecase())
  return makeLogControllerDecorator(controller)
}
