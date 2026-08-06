import { describe, expect, it } from 'vitest';

import { InvariantViolationError } from '../../../../../src/Core/errors';
import { ValidationIssue, ValidationResult } from '../../../../../src/Core/validations';
import { expectInvariantViolation } from '../../../../shared/helpers';

// function expectInvariantViolation(
//   act: () => unknown,
//   expectedInvariant: string,
//   expectedMessage: string,
// ): void {
//   expect(act).toThrow(InvariantViolationError);

//   try {
//     act();

//     throw new Error(
//       'Expected InvariantViolationError to be thrown.',
//     );
//   } catch (error) {
//     expect(error).toBeInstanceOf(
//       InvariantViolationError,
//     );

//     const invariantError =
//       error as InvariantViolationError;

//     expect(invariantError.invariant).toBe(
//       expectedInvariant,
//     );

//     expect(invariantError.message).toBe(
//       expectedMessage,
//     );
//   }
// }

describe('ValidationResult', () => {
  const issue = ValidationIssue.of('USER.INVALID', 'User is invalid.');

  describe('construction', () => {
    it('creates a failed validation result', () => {
      const result = ValidationResult.failure(issue);

      expect(result.valid).toBe(false);
      expect(result.invalid).toBe(true);
      expect(result.issues).toEqual([issue]);
    });
  });

  describe('factory', () => {
    describe('success()', () => {
      it('returns a successful validation result', () => {
        const result = ValidationResult.success();

        expect(result.valid).toBe(true);
        expect(result.invalid).toBe(false);
        expect(result.issues).toEqual([]);
      });

      it('returns a ValidationResult instance', () => {
        expect(ValidationResult.success()).toBeInstanceOf(ValidationResult);
      });
    });

    describe('failure()', () => {
      it('returns a failed validation result', () => {
        const result = ValidationResult.failure(issue);

        expect(result.valid).toBe(false);
        expect(result.invalid).toBe(true);
        expect(result.issues).toEqual([issue]);
      });

      it('returns a ValidationResult instance', () => {
        expect(ValidationResult.failure(issue)).toBeInstanceOf(ValidationResult);
      });

      it('creates a new instance for each invocation', () => {
        const first = ValidationResult.failure(issue);

        const second = ValidationResult.failure(issue);

        expect(first).not.toBe(second);
      });
    });
  });

  describe('invariants', () => {
    it('rejects an empty failure', () => {
      expectInvariantViolation(
        () => ValidationResult.failure(),
        'ValidationResult.issues',
        'A failed validation result must contain at least one validation issue.',
      );
    });

    it('rejects null validation issues', () => {
      expectInvariantViolation(
        () => ValidationResult.failure(null as never),
        'ValidationResult.issues',
        'Validation issues must not contain null or undefined values.',
      );
    });

    it('rejects undefined validation issues', () => {
      expectInvariantViolation(
        () => ValidationResult.failure(undefined as never),
        'ValidationResult.issues',
        'Validation issues must not contain null or undefined values.',
      );
    });
  });

  describe('immutability', () => {
    it('defensively copies supplied issues', () => {
      const issues = [issue];

      const result = ValidationResult.failure(...issues);

      issues.push(ValidationIssue.of('USER.EMAIL', 'Email is invalid.'));

      expect(result.issues).toHaveLength(1);
    });

    it('prevents mutation of exposed issues', () => {
      const result = ValidationResult.failure(issue);

      expect(() => {
        (result.issues as ValidationIssue[]).push(
          ValidationIssue.of('USER.EMAIL', 'Email is invalid.'),
        );
      }).toThrow();

      expect(result.issues).toHaveLength(1);
    });
  });

  describe('preservation', () => {
    it('preserves issue object identity', () => {
      const result = ValidationResult.failure(issue);

      expect(result.issues[0]).toBe(issue);
    });
  });

  describe('singleton', () => {
    it('returns the shared success instance', () => {
      expect(ValidationResult.success()).toBe(ValidationResult.success());
    });

    it('shares the empty issue collection', () => {
      expect(ValidationResult.success().issues).toBe(ValidationResult.success().issues);
    });
  });

  describe('type', () => {
    it('is a ValidationResult', () => {
      const result = ValidationResult.failure(issue);

      expect(result).toBeInstanceOf(ValidationResult);
    });
  });
});
