import { type HttpRequest, type HttpResponse, type Controller } from '@/presentation/protocols'
import { forbidden, noContent, serverError } from '@/presentation/helpers'
import { InvalidParamError } from '@/presentation/errors'
import { type DeleteProduct, type CheckProductById } from '@/domain/usecases'

export class DeleteProductController implements Controller {
  constructor (
    private readonly checkProductById: CheckProductById,
    private readonly deleteProduct: DeleteProduct
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const id = httpRequest.params.productId
      const exists = await this.checkProductById.checkById(id)
      if (!exists) {
        return forbidden(new InvalidParamError('id'))
      }
      await this.deleteProduct.delete(id)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
