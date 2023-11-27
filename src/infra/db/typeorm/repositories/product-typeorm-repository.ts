import { TypeormHelper } from '@/infra/db/typeorm/helpers'
import { Product, Restaurant } from '@/infra/db/typeorm/entities'
import { type AddProductRepository } from '@/data/protocols'
import { RestaurantModel, type ProductModel } from '@/domain/models'
import { type AddProductParams } from '@/domain/usecases'

export class ProductTypeormRepository implements AddProductRepository {
  async add (data: AddProductParams): Promise<boolean | ProductModel> {
    const restaurantRepository = TypeormHelper.client.getRepository(Restaurant)
    const productRepository = TypeormHelper.client.getRepository(Product)

    const restaurant = await restaurantRepository.findOne({ where: { id: data.restaurantId } }) as RestaurantModel

    const newProduct = productRepository.create({
      ...data,
      restaurant
    })

    return await productRepository.save(newProduct)
  }
}
