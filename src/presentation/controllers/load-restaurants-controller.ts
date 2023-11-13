import { type HttpRequest, type HttpResponse, type Controller } from '@/presentation/protocols'
import { noContent, ok, serverError } from '@/presentation/helpers'
import { type LoadRestaurants } from '@/domain/usecases'

export class LoadRestaurantsController implements Controller {
  constructor (private readonly loadRestaurants: LoadRestaurants) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const restaurants = await this.loadRestaurants.load()
      if (restaurants.length) {
        return ok(restaurants)
      }
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
