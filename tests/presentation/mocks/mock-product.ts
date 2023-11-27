import { ProductModel } from '@/domain/models'
import { AddProduct, AddProductParams, CheckProductById, UpdateProduct, UpdateProductParams } from '@/domain/usecases'
import { mockProductModel } from '@/tests/domain/mocks'

export class AddProductSpy implements AddProduct {
  addProductParams: AddProductParams
  result: boolean = true

  async add (data: AddProductParams): Promise<boolean | ProductModel> {
    this.addProductParams = data
    return this.result
  }
}

export class CheckProductByIdSpy implements CheckProductById {
  result: boolean = true
  id: string

  async checkById (id: string): Promise<boolean> {
    this.id = id
    return this.result
  }
}

export class UpdateProductSpy implements UpdateProduct {
  id: string
  updateProductParams: UpdateProductParams
  result: ProductModel = mockProductModel()

  async update (id: string, data: UpdateProductParams): Promise<ProductModel> {
    this.id = id
    this.updateProductParams = data
    return this.result
  }
}
