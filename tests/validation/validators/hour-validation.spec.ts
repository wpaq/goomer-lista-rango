import { HourValidatorSpy } from '@/tests/validation/mocks'

import { HourValidation } from '@/validation/validators'
import { InvalidParamError } from '@/presentation/errors'

const field = 'any_field'

type SutTypes = {
  sut: HourValidation
  hourValidatorSpy: HourValidatorSpy
}

const makeSut = (): SutTypes => {
  const hourValidatorSpy = new HourValidatorSpy()
  const sut = new HourValidation(field, hourValidatorSpy)
  return {
    sut,
    hourValidatorSpy
  }
}

describe('HourValidation', () => {
  test('Should return an error if HourValidator returns false', () => {
    const { sut, hourValidatorSpy } = makeSut()
    hourValidatorSpy.isHourValid = false
    const hour = '00:00'
    const error = sut.validate({ [field]: hour })
    expect(error).toEqual(new InvalidParamError(field))
  })

  test('Should call HourValidator with correct date', () => {
    const { sut, hourValidatorSpy } = makeSut()
    const hour = '00:00'
    sut.validate({ [field]: hour })
    expect(hourValidatorSpy.hour).toBe(hour)
  })

  test('Should throw if HourValidator throws', () => {
    const { sut, hourValidatorSpy } = makeSut()
    jest.spyOn(hourValidatorSpy, 'isHour').mockImplementationOnce(() => {
      throw new Error()
    })
    expect(sut.validate).toThrow()
  })
})
