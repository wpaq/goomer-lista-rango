import { TypeormHelper } from '@/infra/db/typeorm/helpers'
import { Product, Restaurant } from '@/infra/db/typeorm/entities'
import { UpdateProductRepository, type AddProductRepository } from '@/data/protocols'
import { RestaurantModel, type ProductModel } from '@/domain/models'
import { UpdateProductParams, type AddProductParams } from '@/domain/usecases'

export class ProductTypeormRepository implements AddProductRepository, UpdateProductRepository {
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

  async update (id: string, data: UpdateProductParams): Promise<ProductModel> {
    const productRepository = TypeormHelper.client.getRepository(Product)
    const product = await productRepository.findOne({ where: { id } }) as ProductModel
    Object.assign(product, data)
    return await productRepository.save(product)
  }
}
