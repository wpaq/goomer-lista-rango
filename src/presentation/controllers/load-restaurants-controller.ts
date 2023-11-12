import { type HttpRequest, type HttpResponse, type Controller } from '@/presentation/protocols'
import { ok, serverError } from '@/presentation/helpers'
import { type LoadRestaurants } from '@/domain/usecases'

export class LoadRestaurantsController implements Controller {
  constructor (private readonly loadRestaurants: LoadRestaurants) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const restaurants = await this.loadRestaurants.load()
      return ok(restaurants)
    } catch (error) {
      return serverError(error)
    }
  }
}
