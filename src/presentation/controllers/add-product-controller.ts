import { Controller, HttpRequest, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, forbidden, ok, serverError } from '@/presentation/helpers'
import { InvalidParamError } from '@/presentation/errors'
import { AddProduct, CheckRestaurantById } from '@/domain/usecases'

export class AddProductController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly checkRestaurantById: CheckRestaurantById,
    private readonly addProduct: AddProduct
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const exists = await this.checkRestaurantById.checkById(httpRequest.body.restaurantId)
      if (!exists) {
        return forbidden(new InvalidParamError('restaurantId'))
      }
      const produto = await this.addProduct.add(httpRequest.body)
      return ok(produto)
    } catch (error) {
      return serverError(error)
    }
  }
}
