import { type CheckProductById } from '@/domain/usecases'
import { type CheckProductByIdRepository } from '@/data/protocols'

export class DbCheckProductById implements CheckProductById {
  constructor (private readonly checkProductByIdRepository: CheckProductByIdRepository) {}

  async checkById (id: string): Promise<boolean> {
    return await this.checkProductByIdRepository.checkById(id)
  }
}
