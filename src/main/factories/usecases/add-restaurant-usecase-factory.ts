import { DbAddRestaurant } from '@/data/usecases'
import { type AddRestaurant } from '@/domain/usecases'
import { RestaurantTypeormRepository } from '@/infra/db/typeorm'

export const makeDbAddRestaurantUsecase = (): AddRestaurant => {
  const restaurantRepository = new RestaurantTypeormRepository()
  return new DbAddRestaurant(restaurantRepository)
}
