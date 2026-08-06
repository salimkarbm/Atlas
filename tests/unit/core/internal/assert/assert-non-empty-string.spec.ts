import { describe, expect, it } from 'vitest';

import { InvariantViolationError } from '../../../../../src/Core/errors';
import { assertNonEmptyString } from '../../../../../src/Core/internal';

function expectInvariantViolation(
  act: () => unknown,
  expectedInvariant: string,
  expectedMessage: string,
): void {
  expect(act).toThrow(InvariantViolationError);

  try {
    act();

    throw new Error('Expected InvariantViolationError to be thrown.');
  } catch (error) {
    expect(error).toBeInstanceOf(InvariantViolationError);

    const invariantError = error as InvariantViolationError;

    expect(invariantError.invariant).toBe(expectedInvariant);

    expect(invariantError.message).toBe(expectedMessage);
  }
}

describe('assertNonEmptyString', () => {
  const invariant = 'Test.string';

  const violationMessage = 'Value must be a non-empty string.';

  describe('Accepts', () => {
    it('accepts a non-empty string', () => {
      expect(assertNonEmptyString('Create', invariant, violationMessage)).toBe('Create');
    });

    it('returns a trimmed string', () => {
      expect(assertNonEmptyString('  Create  ', invariant, violationMessage)).toBe('Create');
    });

    it('preserves internal whitespace', () => {
      expect(assertNonEmptyString('Create   User', invariant, violationMessage)).toBe(
        'Create   User',
      );
    });
  });

  describe('Rejects', () => {
    it('rejects null', () => {
      expectInvariantViolation(
        () => assertNonEmptyString(null, invariant, violationMessage),
        invariant,
        violationMessage,
      );
    });

    it('rejects undefined', () => {
      expectInvariantViolation(
        () => assertNonEmptyString(undefined, invariant, violationMessage),
        invariant,
        violationMessage,
      );
    });

    it('rejects numbers', () => {
      expectInvariantViolation(
        () => assertNonEmptyString(42, invariant, violationMessage),
        invariant,
        violationMessage,
      );
    });

    it('rejects booleans', () => {
      expectInvariantViolation(
        () => assertNonEmptyString(true, invariant, violationMessage),
        invariant,
        violationMessage,
      );
    });

    it('rejects arrays', () => {
      expectInvariantViolation(
        () => assertNonEmptyString([], invariant, violationMessage),
        invariant,
        violationMessage,
      );
    });

    it('rejects objects', () => {
      expectInvariantViolation(
        () => assertNonEmptyString({}, invariant, violationMessage),
        invariant,
        violationMessage,
      );
    });

    it('rejects functions', () => {
      expectInvariantViolation(
        () => assertNonEmptyString(() => {}, invariant, violationMessage),
        invariant,
        violationMessage,
      );
    });

    it('rejects empty strings', () => {
      expectInvariantViolation(
        () => assertNonEmptyString('', invariant, violationMessage),
        invariant,
        violationMessage,
      );
    });

    it('rejects blank strings', () => {
      expectInvariantViolation(
        () => assertNonEmptyString('     ', invariant, violationMessage),
        invariant,
        violationMessage,
      );
    });
  });

  describe('Behavior', () => {
    it('returns the normalized value', () => {
      const value = assertNonEmptyString('  Update  ', invariant, violationMessage);

      expect(value).toBe('Update');
    });

    it('returns the same string when already normalized', () => {
      expect(assertNonEmptyString('Delete', invariant, violationMessage)).toBe('Delete');
    });
  });
});
