import { Controller, HttpRequest, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, noContent, serverError } from '@/presentation/helpers'
import { AddProduct } from '@/domain/usecases'

export class AddProductController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addProduct: AddProduct
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      await this.addProduct.add(httpRequest.body)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
