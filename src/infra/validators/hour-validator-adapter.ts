import { type HourValidator } from '@/validation/protocols'

import validator from 'validator'

export class HourValidatorAdapter implements HourValidator {
  isValid (hour: string): boolean {
    return validator.isTime(hour)
  }
}
