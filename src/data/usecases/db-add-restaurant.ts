import { type AddRestaurantRepository } from '@/data/protocols'
import { type RestaurantModel } from '@/domain/models'
import { type AddRestaurant, type AddRestaurantParams } from '@/domain/usecases'

export class DbAddRestaurant implements AddRestaurant {
  constructor (private readonly addRestaurantRepository: AddRestaurantRepository) {}

  async add (data: AddRestaurantParams): Promise<boolean | RestaurantModel> {
    return await this.addRestaurantRepository.add(data)
  }
}
