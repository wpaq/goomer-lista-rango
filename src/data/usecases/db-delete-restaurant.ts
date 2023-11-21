import { type DeleteRestaurantRepository } from '@/data/protocols'
import { type DeleteRestaurant } from '@/domain/usecases'

export class DbDeleteRestaurant implements DeleteRestaurant {
  constructor (private readonly deleteRestaurantRepository: DeleteRestaurantRepository) {}

  async delete (id: string): Promise<void> {
    await this.deleteRestaurantRepository.delete(id)
  }
}
