import { EmailValidatorAdapter } from './email-validator-adapter'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

const makeSut = (): EmailValidatorAdapter => {
  return new EmailValidatorAdapter()
}

describe('EmailValidatorAdapter', () => {
  test('Should return false if validator returns false', () => {
    const sut = makeSut()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('invalid@email.com')
    expect(isValid).toBe(false)
  })

  test('Should return true if validator returns true', () => {
    const sut = makeSut()
    const isValid = sut.isValid('invalid@email.com')
    expect(isValid).toBe(true)
  })

  test('Should call validator with the correct email', () => {
    const sut = makeSut()
    const isValidSpy = jest.spyOn(validator, 'isEmail')
    sut.isValid('invalid@email.com')
    expect(isValidSpy).toHaveBeenCalledWith('invalid@email.com')
  })
})
