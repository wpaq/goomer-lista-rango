import { type RestaurantModel } from '@/domain/models'

export interface LoadRestaurantsRepository {
  loadAll: () => Promise<RestaurantModel[]>
}
