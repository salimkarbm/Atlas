import { describe, expectTypeOf, it } from 'vitest';

import {
  ValidationContext,
  ValidationResult,
  Validator,
} from '../../../../../src/core/validations';

class TestValidator implements Validator<string> {
  public validate(value: string, context?: ValidationContext): ValidationResult {
    void value;
    void context;

    return ValidationResult.success();
  }
}

describe('Validator', () => {
  it('defines the expected validation contract', () => {
    expectTypeOf<TestValidator>().toExtend<Validator<string>>();
  });

  it('accepts a generic value type', () => {
    expectTypeOf<TestValidator['validate']>().parameter(0).toEqualTypeOf<string>();
  });

  it('accepts an optional ValidationContext', () => {
    expectTypeOf<TestValidator['validate']>()
      .parameter(1)
      .toEqualTypeOf<ValidationContext | undefined>();
  });

  it('returns a ValidationResult', () => {
    expectTypeOf<TestValidator['validate']>().returns.toEqualTypeOf<ValidationResult>();
  });
});
