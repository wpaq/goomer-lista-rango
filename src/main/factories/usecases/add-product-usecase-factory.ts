import { DbAddProduct } from '@/data/usecases'
import { type AddProduct } from '@/domain/usecases'
import { ProductTypeormRepository, RestaurantTypeormRepository } from '@/infra/db/typeorm'

export const makeDbAddProductUsecase = (): AddProduct => {
  const productRepository = new ProductTypeormRepository()
  const restaurantRepository = new RestaurantTypeormRepository()
  return new DbAddProduct(restaurantRepository, productRepository)
}
