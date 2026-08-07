export interface Validator<T> {
  validate(value: T, context?: ValidationContext): ValidationResult;
}
