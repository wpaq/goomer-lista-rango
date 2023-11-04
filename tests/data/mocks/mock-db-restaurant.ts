import { mockRestaurantModel } from '@/tests/domain/mocks'

import { type AddRestaurantRepository } from '@/data/protocols'
import { type RestaurantModel } from '@/domain/models'
import { type AddRestaurantParams } from '@/domain/usecases'

export class AddRestaurantRepositorySpy implements AddRestaurantRepository {
  addRestaurantParams: AddRestaurantParams
  result = mockRestaurantModel()

  async add (data: AddRestaurantParams): Promise<RestaurantModel> {
    this.addRestaurantParams = data
    return this.result
  }
}
