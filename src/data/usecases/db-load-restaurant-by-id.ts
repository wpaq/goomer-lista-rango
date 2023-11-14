import { type LoadRestaurantByIdRepository } from '@/data/protocols'
import { type RestaurantModel } from '@/domain/models'
import { type LoadRestaurantById } from '@/domain/usecases'

export class DbLoadRestaurantById implements LoadRestaurantById {
  constructor (private readonly loadRestaurantByIdRepository: LoadRestaurantByIdRepository) {}

  async load (id: string): Promise<RestaurantModel> {
    return await this.loadRestaurantByIdRepository.loadById(id)
  }
}
