import { type ProductModel } from '@/domain/models'
import { type UpdateProductParams } from '@/domain/usecases'

export interface UpdateProductRepository {
  update: (id: string, data: UpdateProductParams) => Promise<ProductModel>
}
