import { type RestaurantModel } from '@/domain/models'

export interface UpdateRestaurantRepository {
  update: (id: string) => Promise<RestaurantModel>
}
