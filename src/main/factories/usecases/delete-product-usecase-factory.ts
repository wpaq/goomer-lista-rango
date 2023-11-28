import { DbDeleteProduct } from '@/data/usecases'
import { type DeleteProduct } from '@/domain/usecases'
import { ProductTypeormRepository } from '@/infra/db/typeorm'

export const makeDbDeleteProductUsecase = (): DeleteProduct => {
  const productRepository = new ProductTypeormRepository()
  return new DbDeleteProduct(productRepository)
}
