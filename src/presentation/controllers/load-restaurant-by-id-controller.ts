import { type CheckRestaurantById } from '@/domain/usecases'
import { type HttpRequest, type HttpResponse, type Controller } from '@/presentation/protocols'
import { forbidden, ok, serverError } from '@/presentation/helpers'
import { InvalidParamError } from '@/presentation/errors'

export class LoadRestaurantByIdController implements Controller {
  constructor (private readonly checkRestaurantById: CheckRestaurantById) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const exists = await this.checkRestaurantById.checkById(httpRequest.params.restaurantId)
      if (!exists) {
        return forbidden(new InvalidParamError('restaurantId'))
      }
      return ok('')
    } catch (error) {
      return serverError(error)
    }
  }
}
