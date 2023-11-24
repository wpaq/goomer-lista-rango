import { DbAddProduct } from '@/data/usecases'
import { type AddProduct } from '@/domain/usecases'
import { ProductTypeormRepository } from '@/infra/db/typeorm'

export const makeDbAddProductUsecase = (): AddProduct => {
  const productRepository = new ProductTypeormRepository()
  return new DbAddProduct(productRepository)
}
