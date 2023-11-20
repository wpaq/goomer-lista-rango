import { type RestaurantModel } from '@/domain/models'
import { type LoadRestaurants, type AddRestaurant, type AddRestaurantParams, type LoadRestaurantById, type CheckRestaurantById, type UpdateRestaurant, type UpdateRestaurantParams } from '@/domain/usecases'
import { mockRestaurantModel, mockRestaurantsModel } from '@/tests/domain/mocks'

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

export class CheckRestaurantByIdSpy implements CheckRestaurantById {
  result: boolean = true
  id: string

  async checkById (id: string): Promise<boolean> {
    this.id = id
    return this.result
  }
}

export class LoadRestaurantByIdSpy implements LoadRestaurantById {
  result = mockRestaurantModel()
  id: string

  async load (id: string): Promise<RestaurantModel> {
    this.id = id
    return this.result
  }
}

export class UpdateRestaurantSpy implements UpdateRestaurant {
  id: string
  updateRestaurantParams: UpdateRestaurantParams
  result: RestaurantModel = mockRestaurantModel()

  async update (id: string, data: UpdateRestaurantParams): Promise<RestaurantModel> {
    this.id = id
    this.updateRestaurantParams = data
    return this.result
  }
}
