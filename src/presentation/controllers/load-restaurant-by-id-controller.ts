import { type CheckRestaurantById } from '@/domain/usecases'
import { type HttpRequest, type HttpResponse, type Controller } from '@/presentation/protocols'
import { ok, serverError } from '@/presentation/helpers'

export class LoadRestaurantByIdController implements Controller {
  constructor (private readonly checkRestaurantById: CheckRestaurantById) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      await this.checkRestaurantById.checkById(httpRequest.params.restaurantId)
      return ok('')
    } catch (error) {
      return serverError(error)
    }
  }
}
