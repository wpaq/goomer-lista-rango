import { HourValidatorAdapter } from '@/infra/validators'
import { type Validation } from '@/presentation/protocols'
import { ValidationComposite, RequiredFieldValidation, HourValidation } from '@/validation/validators'

export const makeAddRestaurantValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['photo', 'name', 'address', 'openingHours']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new HourValidation('openingHours', new HourValidatorAdapter()))
  return new ValidationComposite(validations)
}
