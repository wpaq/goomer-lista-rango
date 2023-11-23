import { type ProductModel } from '@/domain/models'
import { type AddProductParams } from '@/domain/usecases'

export interface AddProductRepository {
  add: (data: AddProductParams) => Promise<ProductModel | boolean>
}
