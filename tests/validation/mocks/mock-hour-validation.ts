import { type HourValidator } from '@/validation/protocols'

export class HourValidatorSpy implements HourValidator {
  isHourValid = true
  date: string

  isHour (date: string): boolean {
    this.date = date
    return this.isHourValid
  }
}
