import { makeDbAddRestaurantUsecase } from '@/main/factories/usecases'
import { makeAddRestaurantValidation } from '@/main/factories/validations'
import { AddRestaurantController } from '@/presentation/controllers'
import { type Controller } from '@/presentation/protocols'

export const makeAddRestaurantController = (): Controller => {
  return new AddRestaurantController(makeDbAddRestaurantUsecase(), makeAddRestaurantValidation())
}
