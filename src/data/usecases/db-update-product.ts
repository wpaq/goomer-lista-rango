import { type UpdateProductRepository } from '@/data/protocols'
import { type ProductModel } from '@/domain/models'
import { type UpdateProductParams, type UpdateProduct } from '@/domain/usecases'

export class DbUpdateProduct implements UpdateProduct {
  constructor (private readonly updateProductRepository: UpdateProductRepository) {}

  async update (id: string, data: UpdateProductParams): Promise<ProductModel> {
    return await this.updateProductRepository.update(id, data)
  }
}
