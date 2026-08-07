import { describe, expect, it } from 'vitest';

import {
  ValidationContext,
  ValidationIssue,
  ValidationProfile,
  ValidationResult,
  type Validator,
} from '../../../../src/Core/validations';

describe('Validation public API', () => {
  it('exports ValidationContext', () => {
    expect(ValidationContext).toBeDefined();
  });

  it('exports ValidationIssue', () => {
    expect(ValidationIssue).toBeDefined();
  });

  it('exports ValidationProfile', () => {
    expect(ValidationProfile).toBeDefined();
  });

  it('exports ValidationResult', () => {
    expect(ValidationResult).toBeDefined();
  });

  it('exports Validator as a type', () => {
    const validator: Validator<string> = {
      validate: () => ValidationResult.success(),
    };

    expect(validator).toBeDefined();
  });
});
