import { DbUpdateRestaurant } from '@/data/usecases'
import { type UpdateRestaurant } from '@/domain/usecases'
import { RestaurantTypeormRepository } from '@/infra/db/typeorm'

export const makeDbUpdateRestaurantUsecase = (): UpdateRestaurant => {
  const restaurantRepository = new RestaurantTypeormRepository()
  return new DbUpdateRestaurant(restaurantRepository)
}
