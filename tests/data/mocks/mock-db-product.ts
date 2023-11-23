import { mockProductModel } from '@/tests/domain/mocks'

import { type AddProductRepository } from '@/data/protocols'
import { type ProductModel } from '@/domain/models'
import { type AddProductParams } from '@/domain/usecases'

export class AddProductRepositorySpy implements AddProductRepository {
  addProductParams: AddProductParams
  result: ProductModel = mockProductModel()

  async add (data: AddProductParams): Promise<ProductModel> {
    this.addProductParams = data
    return this.result
  }
}
