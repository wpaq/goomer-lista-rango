import { type LoadRestaurantById, type CheckRestaurantById } from '@/domain/usecases'
import { type HttpRequest, type HttpResponse, type Controller } from '@/presentation/protocols'
import { forbidden, ok, serverError } from '@/presentation/helpers'
import { InvalidParamError } from '@/presentation/errors'

export class LoadRestaurantByIdController implements Controller {
  constructor (
    private readonly checkRestaurantById: CheckRestaurantById,
    private readonly loadRestaurantById: LoadRestaurantById
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const exists = await this.checkRestaurantById.checkById(httpRequest.params.restaurantId)
      if (!exists) {
        return forbidden(new InvalidParamError('restaurantId'))
      }
      const restaurant = await this.loadRestaurantById.load(httpRequest.params.restaurantId)
      return ok(restaurant)
    } catch (error) {
      return serverError(error)
    }
  }
}
