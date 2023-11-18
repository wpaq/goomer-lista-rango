import { type CheckRestaurantById } from '@/domain/usecases'
import { type CheckRestaurantByIdRepository } from '@/data/protocols'

export class DbCheckRestaurantById implements CheckRestaurantById {
  constructor (private readonly checkRestaurantByIdRepository: CheckRestaurantByIdRepository) {}

  async checkById (id: string): Promise<boolean> {
    return await this.checkRestaurantByIdRepository.checkById(id)
  }
}
