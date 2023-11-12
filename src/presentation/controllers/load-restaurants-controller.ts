import { type HttpRequest, type HttpResponse, type Controller } from '@/presentation/protocols'
import { ok } from '@/presentation/helpers'
import { type LoadRestaurants } from '@/domain/usecases'

export class LoadRestaurantsController implements Controller {
  constructor (private readonly loadRestaurants: LoadRestaurants) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const restaurants = await this.loadRestaurants.load()
    return ok(restaurants)
  }
}
