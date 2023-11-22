import { DbDeleteRestaurant } from '@/data/usecases'
import { type DeleteRestaurant } from '@/domain/usecases'
import { RestaurantTypeormRepository } from '@/infra/db/typeorm'

export const makeDbDeleteRestaurantUsecase = (): DeleteRestaurant => {
  const restaurantRepository = new RestaurantTypeormRepository()
  return new DbDeleteRestaurant(restaurantRepository)
}
