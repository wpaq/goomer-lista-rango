import { mockProductModel } from '@/tests/domain/mocks'

import { UpdateProductRepository, AddProductRepository, CheckProductByIdRepository } from '@/data/protocols'
import { type UpdateProductParams, type AddProductParams } from '@/domain/usecases'
import { type ProductModel } from '@/domain/models'

export class AddProductRepositorySpy implements AddProductRepository {
  addProductParams: AddProductParams
  result: ProductModel = mockProductModel()

  async add (data: AddProductParams): Promise<ProductModel> {
    this.addProductParams = data
    return this.result
  }
}

export class UpdateProductRepositorySpy implements UpdateProductRepository {
  result: ProductModel = mockProductModel()
  updateProductParams: UpdateProductParams
  id: string

  async update (id: string, data: UpdateProductParams): Promise<ProductModel> {
    this.id = id
    this.updateProductParams = data
    return this.result
  }
}

export class CheckProductByIdRepositorySpy implements CheckProductByIdRepository {
  result: boolean = true
  id: string

  async checkById (id: string): Promise<boolean> {
    this.id = id
    return this.result
  }
}
