import { type UpdateRestaurantRepository } from '@/data/protocols'
import { type RestaurantModel } from '@/domain/models'
import { type UpdateRestaurantParams, type UpdateRestaurant } from '@/domain/usecases'

export class DbUpdateRestaurant implements UpdateRestaurant {
  constructor (private readonly updateRestaurantRepository: UpdateRestaurantRepository) {}

  async update (id: string, data: UpdateRestaurantParams): Promise<RestaurantModel> {
    return await this.updateRestaurantRepository.update(id, data)
  }
}
