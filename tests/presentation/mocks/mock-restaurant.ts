import { type RestaurantModel } from '@/domain/models'
import { type LoadRestaurants, type AddRestaurant, type AddRestaurantParams } from '@/domain/usecases'
import { mockRestaurantsModel } from '@/tests/domain/mocks'

export class AddRestaurantSpy implements AddRestaurant {
  addRestaurantParams: AddRestaurantParams
  result = true

  async add (data: AddRestaurantParams): Promise<RestaurantModel | boolean> {
    this.addRestaurantParams = data
    return this.result
  }
}

export class LoadRestaurantsSpy implements LoadRestaurants {
  result = mockRestaurantsModel()

  async load (): Promise<RestaurantModel[]> {
    return this.result
  }
}
