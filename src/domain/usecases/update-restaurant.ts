import { type RestaurantModel } from '@/domain/models'

export interface UpdateRestaurant {
  update: (id: string) => Promise<RestaurantModel>
}
