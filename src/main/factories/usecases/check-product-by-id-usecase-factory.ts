import { DbCheckProductById } from '@/data/usecases'
import { type CheckProductById } from '@/domain/usecases'
import { ProductTypeormRepository } from '@/infra/db/typeorm'

export const makeDbCheckProductByIdUsecase = (): CheckProductById => {
  const productRepository = new ProductTypeormRepository()
  return new DbCheckProductById(productRepository)
}
