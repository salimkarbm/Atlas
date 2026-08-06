import { describe, expect, it } from 'vitest';

import { expectInvariantViolation } from '../../../../shared/helpers';
import { assertNonEmptyString } from '../../../../../src/Core/internal';

describe('assertNonEmptyString', () => {
  const invariant = 'Test.string';

  const violationMessage = 'Value must be a non-empty string.';

  describe('Accepts', () => {
    it('accepts a non-empty string', () => {
      expect(assertNonEmptyString('Create', invariant, violationMessage)).toBe('Create');
    });

    it('trims leading whitespace', () => {
      expect(assertNonEmptyString('   Create', invariant, violationMessage)).toBe('Create');
    });

    it('trims trailing whitespace', () => {
      expect(assertNonEmptyString('Create   ', invariant, violationMessage)).toBe('Create');
    });

    it('trims leading and trailing whitespace', () => {
      expect(assertNonEmptyString('   Create   ', invariant, violationMessage)).toBe('Create');
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

    it('rejects Date instances', () => {
      expectInvariantViolation(
        () => assertNonEmptyString(new Date(), invariant, violationMessage),
        invariant,
        violationMessage,
      );
    });

    it('rejects Map instances', () => {
      expectInvariantViolation(
        () => assertNonEmptyString(new Map(), invariant, violationMessage),
        invariant,
        violationMessage,
      );
    });

    it('rejects Set instances', () => {
      expectInvariantViolation(
        () => assertNonEmptyString(new Set(), invariant, violationMessage),
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

    it('rejects String object instances', () => {
      expectInvariantViolation(
        () => assertNonEmptyString(new String('Create'), invariant, violationMessage),
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

    it('returns a primitive string', () => {
      const value = assertNonEmptyString('Create', invariant, violationMessage);

      expect(typeof value).toBe('string');
    });
  });
});
