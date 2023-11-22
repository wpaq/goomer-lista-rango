import { type HttpRequest, type HttpResponse, type Controller } from '@/presentation/protocols'
import { noContent, serverError } from '@/presentation/helpers'
import { type CheckRestaurantById } from '@/domain/usecases'

export class DeleteRestaurantController implements Controller {
  constructor (
    private readonly checkRestaurantById: CheckRestaurantById
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const id = httpRequest.params.restaurantId
      await this.checkRestaurantById.checkById(id)

      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
