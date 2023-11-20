import { type HttpRequest, type HttpResponse, type Controller } from '@/presentation/protocols'
import { ok, serverError } from '@/presentation/helpers'
import { type UpdateRestaurant } from '@/domain/usecases'

export class UpdateRestaurantController implements Controller {
  constructor (private readonly updateRestaurant: UpdateRestaurant) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const id = httpRequest.params.restaurantId
      const data = httpRequest.body
      const restaurants = await this.updateRestaurant.update(id, data)
      return ok(restaurants)
    } catch (error) {
      return serverError(error)
    }
  }
}
