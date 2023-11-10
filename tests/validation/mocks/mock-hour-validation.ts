import { type HourValidator } from '@/validation/protocols'

export class HourValidatorSpy implements HourValidator {
  isHourValid = true
  hour: string

  isValid (hour: string): boolean {
    this.hour = hour
    return this.isHourValid
  }
}
