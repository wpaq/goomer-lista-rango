import { type Validation, type Controller, type HttpRequest, type HttpResponse } from '@/presentation/protocols'
import { badRequest, ok, serverError } from '@/presentation/helpers'
import { type AddRestaurant } from '@/domain/usecases'

export class AddRestaurantController implements Controller {
  constructor (
    private readonly addRestaurant: AddRestaurant,
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const restaurant = await this.addRestaurant.add(httpRequest.body)
      return ok(restaurant)
    } catch (error) {
      return serverError(error)
    }
  }
}
