import { Controller, HttpRequest, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, ok, serverError } from '@/presentation/helpers'
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
      const produto = await this.addProduct.add(httpRequest.body)
      return ok(produto)
    } catch (error) {
      return serverError(error)
    }
  }
}
