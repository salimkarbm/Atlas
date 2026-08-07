import { ValidationContext, ValidationResult } from '../models';

export interface Validator<T> {
  validate(value: T, context?: ValidationContext): ValidationResult;
}
