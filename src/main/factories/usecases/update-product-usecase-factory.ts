import { DbUpdateProduct } from '@/data/usecases'
import { type UpdateProduct } from '@/domain/usecases'
import { ProductTypeormRepository } from '@/infra/db/typeorm'

export const makeDbUpdateProductUsecase = (): UpdateProduct => {
  const productRepository = new ProductTypeormRepository()
  return new DbUpdateProduct(productRepository)
}
