import { type HttpRequest, type HttpResponse, type Controller } from '@/presentation/protocols'
import { forbidden, noContent, serverError } from '@/presentation/helpers'
import { InvalidParamError } from '@/presentation/errors'
import { type CheckRestaurantById } from '@/domain/usecases'

export class DeleteRestaurantController implements Controller {
  constructor (
    private readonly checkRestaurantById: CheckRestaurantById
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const id = httpRequest.params.restaurantId
      const exists = await this.checkRestaurantById.checkById(id)
      if (!exists) {
        return forbidden(new InvalidParamError('id'))
      }

      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
