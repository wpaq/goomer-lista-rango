import { CheckRestaurantByIdRepository, type AddProductRepository } from '@/data/protocols'
import { type ProductModel } from '@/domain/models'
import { type AddProduct, type AddProductParams } from '@/domain/usecases'

export class DbAddProduct implements AddProduct {
  constructor (
    private readonly checkRestaurantByIdRepository: CheckRestaurantByIdRepository,
    private readonly addProductRepository: AddProductRepository
  ) {}

  async add (data: AddProductParams): Promise<boolean | ProductModel> {
    const exists = await this.checkRestaurantByIdRepository.checkById(data.restaurantId)
    if (!exists) {
      return false
    }
    return await this.addProductRepository.add(data)
  }
}
