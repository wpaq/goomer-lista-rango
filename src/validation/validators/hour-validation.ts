import { type HourValidator } from '@/validation/protocols'
import { type Validation } from '@/presentation/protocols'
import { InvalidParamError } from '@/presentation/errors'

export class HourValidation implements Validation {
  constructor (
    private readonly fieldName: string,
    private readonly hourValidator: HourValidator
  ) {}

  validate (input: any): Error | null {
    const isValid = this.hourValidator.isHour(input[this.fieldName])
    if (!isValid) {
      return new InvalidParamError(this.fieldName)
    }
    return null
  }
}
