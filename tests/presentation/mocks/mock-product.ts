import { ProductModel } from '@/domain/models'
import { AddProduct, AddProductParams, CheckProductById } from '@/domain/usecases'

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
