import { makeDbAddRestaurantUsecase } from '@/main/factories/usecases'
import { makeAddRestaurantValidation } from '@/main/factories/validations'
import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { AddRestaurantController } from '@/presentation/controllers'
import { type Controller } from '@/presentation/protocols'

export const makeAddRestaurantController = (): Controller => {
  const controller = new AddRestaurantController(makeDbAddRestaurantUsecase(), makeAddRestaurantValidation())
  return makeLogControllerDecorator(controller)
}
