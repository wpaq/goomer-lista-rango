import { DbLoadRestaurantById } from '@/data/usecases'
import { type LoadRestaurantById } from '@/domain/usecases'
import { RestaurantTypeormRepository } from '@/infra/db/typeorm'

export const makeDbLoadRestaurantByIdUsecase = (): LoadRestaurantById => {
  const restaurantRepository = new RestaurantTypeormRepository()
  return new DbLoadRestaurantById(restaurantRepository)
}
