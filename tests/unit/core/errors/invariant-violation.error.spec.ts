import { describe, expect, it } from 'vitest';

import { InvariantViolationError } from '../../../../src/core/errors';

describe('InvariantViolationError', () => {
  describe('construction', () => {
    it('creates an error with a valid invariant and message', () => {
      const error = new InvariantViolationError('ValidationIssue.code', 'Code must not be empty.');

      expect(error.invariant).toBe('ValidationIssue.code');
      expect(error.message).toBe('Code must not be empty.');
    });

    it('preserves the original invariant value', () => {
      const invariant = ' ValidationIssue.code ';

      const error = new InvariantViolationError(invariant, 'Code must not be empty.');

      expect(error.invariant).toBe(invariant);
    });

    it('preserves the original message value', () => {
      const message = ' Code must not be empty. ';

      const error = new InvariantViolationError('ValidationIssue.code', message);

      expect(error.message).toBe(message);
    });
  });

  describe('inheritance', () => {
    it('is an instance of Error', () => {
      const error = new InvariantViolationError('ValidationIssue.code', 'Code must not be empty.');

      expect(error).toBeInstanceOf(Error);
    });

    it('is an instance of InvariantViolationError', () => {
      const error = new InvariantViolationError('ValidationIssue.code', 'Code must not be empty.');

      expect(error).toBeInstanceOf(InvariantViolationError);
    });
  });

  describe('constructor validation', () => {
    it('throws when the invariant is empty', () => {
      expect(() => {
        new InvariantViolationError('', 'Code must not be empty.');
      }).toThrow('TypeError: Invariant identifier must not be empty.');
    });

    it('throws when the invariant contains only whitespace', () => {
      expect(() => {
        new InvariantViolationError(' ', 'Code must not be empty.');
      }).toThrow('TypeError: Invariant identifier must not be empty or whitespace.');
    });

    it('throws when the message is empty', () => {
      expect(() => {
        new InvariantViolationError('ValidationIssue.code', '');
      }).toThrow('TypeError: Invariant violation message must not be empty.');
    });

    it('throws when the message contains only whitespace', () => {
      expect(() => {
        new InvariantViolationError('ValidationIssue.code', '   ');
      }).toThrow('TypeError: Invariant violation message must not be empty or whitespace.');
    });
  });
});
