import { type RestaurantModel } from '@/domain/models'

export interface LoadRestaurants {
  load: () => Promise<RestaurantModel[]>
}
