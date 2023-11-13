import { DbLoadRestaurants } from '@/data/usecases'
import { type LoadRestaurants } from '@/domain/usecases'
import { RestaurantTypeormRepository } from '@/infra/db/typeorm'

export const makeDbLoadRestaurantsUsecase = (): LoadRestaurants => {
  const restaurantRepository = new RestaurantTypeormRepository()
  return new DbLoadRestaurants(restaurantRepository)
}
