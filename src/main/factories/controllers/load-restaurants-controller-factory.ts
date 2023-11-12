import { makeDbLoadRestaurantsUsecase } from '@/main/factories/usecases'
import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { LoadRestaurantsController } from '@/presentation/controllers'
import { type Controller } from '@/presentation/protocols'

export const makeLoadRestaurantsController = (): Controller => {
  const controller = new LoadRestaurantsController(makeDbLoadRestaurantsUsecase())
  return makeLogControllerDecorator(controller)
}
