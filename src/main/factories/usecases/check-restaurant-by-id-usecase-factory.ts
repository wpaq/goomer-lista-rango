import { DbCheckRestaurantById } from '@/data/usecases'
import { type CheckRestaurantById } from '@/domain/usecases'
import { RestaurantTypeormRepository } from '@/infra/db/typeorm'

export const makeDbCheckRestaurantByIdUsecase = (): CheckRestaurantById => {
  const restaurantRepository = new RestaurantTypeormRepository()
  return new DbCheckRestaurantById(restaurantRepository)
}
