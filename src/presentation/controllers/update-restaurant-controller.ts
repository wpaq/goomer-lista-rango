import { type HttpRequest, type HttpResponse, type Controller } from '@/presentation/protocols'
import { forbidden, ok, serverError } from '@/presentation/helpers'
import { InvalidParamError } from '@/presentation/errors'
import { type CheckRestaurantById, type UpdateRestaurant } from '@/domain/usecases'

export class UpdateRestaurantController implements Controller {
  constructor (
    private readonly checkRestaurantById: CheckRestaurantById,
    private readonly updateRestaurant: UpdateRestaurant
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const id = httpRequest.params.restaurantId
      const exists = await this.checkRestaurantById.checkById(id)
      if (!exists) {
        return forbidden(new InvalidParamError('id'))
      }
      const data = httpRequest.body
      const restaurants = await this.updateRestaurant.update(id, data)
      return ok(restaurants)
    } catch (error) {
      return serverError(error)
    }
  }
}
