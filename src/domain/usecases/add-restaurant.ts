import { type RestaurantModel } from '@/domain/models'

export type AddRestaurantParams = Omit<RestaurantModel, 'id'>

export interface AddRestaurant {
  add: (data: AddRestaurantParams) => Promise<RestaurantModel | boolean>
}
