import { type HourValidator } from '@/validation/protocols'

import validator from 'validator'

export class HourValidatorAdapter implements HourValidator {
  isHour (hour: string): boolean {
    return validator.isTime(hour)
  }
}
