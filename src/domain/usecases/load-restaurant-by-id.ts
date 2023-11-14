import { type RestaurantModel } from '@/domain/models'

export interface LoadRestaurantById {
  load: (id: string) => Promise<RestaurantModel>
}
