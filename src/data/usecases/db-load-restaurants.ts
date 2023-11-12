import { type LoadRestaurantsRepository } from '@/data/protocols'
import { type RestaurantModel } from '@/domain/models'
import { type LoadRestaurants } from '@/domain/usecases'

export class DbLoadRestaurants implements LoadRestaurants {
  constructor (private readonly loadRestaurantsRepository: LoadRestaurantsRepository) {}

  async load (): Promise<RestaurantModel[]> {
    return await this.loadRestaurantsRepository.loadAll()
  }
}
