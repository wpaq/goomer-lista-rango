import { type Validation } from '@/presentation/protocols'
import { ValidationComposite, RequiredFieldValidation } from '@/validation/validators'

export const makeAddProductValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['photo', 'name', 'price', 'category', 'restaurantId']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
