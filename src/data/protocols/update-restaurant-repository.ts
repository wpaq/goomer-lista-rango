import { type RestaurantModel } from '@/domain/models'
import { type UpdateRestaurantParams } from '@/domain/usecases'

export interface UpdateRestaurantRepository {
  update: (id: string, data: UpdateRestaurantParams) => Promise<RestaurantModel>
}
