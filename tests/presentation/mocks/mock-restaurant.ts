import { type RestaurantModel } from '@/domain/models'
import { type AddRestaurant, type AddRestaurantParams } from '@/domain/usecases'

export class AddRestaurantSpy implements AddRestaurant {
  addRestaurantParams: AddRestaurantParams
  result = true

  async add (data: AddRestaurantParams): Promise<RestaurantModel | boolean> {
    this.addRestaurantParams = data
    return this.result
  }
}
