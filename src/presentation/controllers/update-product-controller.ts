import { type HttpRequest, type HttpResponse, type Controller } from '@/presentation/protocols'
import { forbidden, noContent, serverError } from '@/presentation/helpers'
import { InvalidParamError } from '@/presentation/errors'
import { CheckProductById, UpdateProduct } from '@/domain/usecases'

export class UpdateProductController implements Controller {
  constructor (
    private readonly checkProductById: CheckProductById,
    private readonly updateProduct: UpdateProduct
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const id = httpRequest.params.productId
      const exists = await this.checkProductById.checkById(id)
      if (!exists) {
        return forbidden(new InvalidParamError('id'))
      }
      await this.updateProduct.update(id, httpRequest.body)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
