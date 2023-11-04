import { type RestaurantModel } from '@/domain/models'
import { type AddRestaurantParams } from '@/domain/usecases'

export interface AddRestaurantRepository {
  add: (data: AddRestaurantParams) => Promise<RestaurantModel | boolean>
}
