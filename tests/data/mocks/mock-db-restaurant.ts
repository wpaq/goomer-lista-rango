import { mockRestaurantModel, mockRestaurantsModel } from '@/tests/domain/mocks'

import { type LoadRestaurantsRepository, type AddRestaurantRepository, type LoadRestaurantByIdRepository, type CheckRestaurantByIdRepository, type UpdateRestaurantRepository } from '@/data/protocols'
import { type RestaurantModel } from '@/domain/models'
import { type UpdateRestaurantParams, type AddRestaurantParams } from '@/domain/usecases'

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

export class CheckRestaurantByIdRepositorySpy implements CheckRestaurantByIdRepository {
  result: boolean = true
  id: string

  async checkById (id: string): Promise<boolean> {
    this.id = id
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

export class UpdateRestaurantRepositorySpy implements UpdateRestaurantRepository {
  result: RestaurantModel = mockRestaurantModel()
  updateRestaurantParams: UpdateRestaurantParams
  id: string

  async update (id: string, data: UpdateRestaurantParams): Promise<RestaurantModel> {
    this.id = id
    this.updateRestaurantParams = data
    return this.result
  }
}
