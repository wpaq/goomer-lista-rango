import { mockRestaurantModel, mockRestaurantsModel } from '@/tests/domain/mocks'

import { type LoadRestaurantsRepository, type AddRestaurantRepository, type LoadRestaurantByIdRepository } from '@/data/protocols'
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

export class LoadRestaurantsRepositorySpy implements LoadRestaurantsRepository {
  result = mockRestaurantsModel()

  async loadAll (): Promise<RestaurantModel[]> {
    return this.result
  }
}

export class LoadRestaurantByIdRepositorySpy implements LoadRestaurantByIdRepository {
  result = mockRestaurantModel()
  id: string

  async loadById (id: string): Promise<RestaurantModel> {
    this.id = id
    return this.result
  }
}
