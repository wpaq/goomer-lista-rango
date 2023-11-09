import { type Validation, type Controller, type HttpRequest, type HttpResponse } from '@/presentation/protocols'
import { badRequest, ok } from '@/presentation/helpers'
import { type AddRestaurant } from '@/domain/usecases'

export class AddRestaurantController implements Controller {
  constructor (
    private readonly addRestaurant: AddRestaurant,
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = this.validation.validate(httpRequest.body)
    if (error) {
      return badRequest(error)
    }

    return ok('any_data')
  }
}
