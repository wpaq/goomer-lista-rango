import { TypeormHelper } from '@/infra/db/typeorm/helpers'
import { Product } from '@/infra/db/typeorm/entities'
import { type AddProductRepository } from '@/data/protocols'
import { type ProductModel } from '@/domain/models'
import { type AddProductParams } from '@/domain/usecases'

export class ProductTypeormRepository implements AddProductRepository {
  async add (data: AddProductParams): Promise<boolean | ProductModel> {
    const productRepository = TypeormHelper.client.getRepository(Product)
    const newProduct = productRepository.create(data)
    return await productRepository.save(newProduct)
  }
}
