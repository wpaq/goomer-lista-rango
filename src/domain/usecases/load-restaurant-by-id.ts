import { type RestaurantModel } from '@/domain/models'

export interface LoadRestaurantById {
  loadById: (id: string) => Promise<RestaurantModel>
}
