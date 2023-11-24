import { ProductModel } from '@/domain/models'
import { AddProduct, AddProductParams } from '@/domain/usecases'

export class AddProductSpy implements AddProduct {
  addProductParams: AddProductParams
  result: boolean = true

  async add (data: AddProductParams): Promise<boolean | ProductModel> {
    this.addProductParams = data
    return this.result
  }
}
