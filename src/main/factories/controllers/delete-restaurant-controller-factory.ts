import { makeDbCheckRestaurantByIdUsecase, makeDbDeleteRestaurantUsecase } from '@/main/factories/usecases'
import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { DeleteRestaurantController } from '@/presentation/controllers'
import { type Controller } from '@/presentation/protocols'

export const makeDeleteRestaurantController = (): Controller => {
  const controller = new DeleteRestaurantController(makeDbCheckRestaurantByIdUsecase(), makeDbDeleteRestaurantUsecase())
  return makeLogControllerDecorator(controller)
}
