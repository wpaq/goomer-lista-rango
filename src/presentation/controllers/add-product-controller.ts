import { Controller, HttpRequest, HttpResponse, Validation } from '@/presentation/protocols'
import { noContent } from '@/presentation/helpers'

export class AddProductController implements Controller {
  constructor (private readonly validation: Validation) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    this.validation.validate(httpRequest.body)
    return noContent()
  }
}
