import { describe, expect, it } from 'vitest';

import { DomainError } from '../../../src/core/errors';

import { InvariantViolationError } from '../../../src/core/errors';

describe('InvariantViolationError', () => {
  describe('construction', () => {
    it('preserves the invariant identifier', () => {
      const error = new InvariantViolationError('User.email', 'Email must be valid.');

      expect(error.invariant).toBe('User.email');
    });

    it('uses the invariant identifier as the error code', () => {
      const error = new InvariantViolationError('User.email', 'Email must be valid.');

      expect(error.code).toBe('User.email');
    });

    it('preserves the message', () => {
      const error = new InvariantViolationError('User.email', 'Email must be valid.');

      expect(error.message).toBe('Email must be valid.');
    });

    it('sets the expected error name', () => {
      const error = new InvariantViolationError('User.email', 'Email must be valid.');

      expect(error.name).toBe('InvariantViolationError');
    });
  });

  describe('inheritance', () => {
    it('is an Error', () => {
      const error = new InvariantViolationError('User.email', 'Email must be valid.');

      expect(error).toBeInstanceOf(Error);
    });

    it('is a DomainError', () => {
      const error = new InvariantViolationError('User.email', 'Email must be valid.');

      expect(error).toBeInstanceOf(DomainError);
    });

    it('is an InvariantViolationError', () => {
      const error = new InvariantViolationError('User.email', 'Email must be valid.');

      expect(error).toBeInstanceOf(InvariantViolationError);
    });
  });

  describe('invariant validation', () => {
    it('rejects an empty invariant identifier', () => {
      expect(() => new InvariantViolationError('', 'Email must be valid.')).toThrow(
        'TypeError: Invariant identifier must not be empty.',
      );
    });

    it('rejects a whitespace-only invariant identifier', () => {
      expect(() => new InvariantViolationError('   ', 'Email must be valid.')).toThrow(
        'TypeError: Invariant identifier must not be empty or whitespace.',
      );
    });
  });

  describe('message validation', () => {
    it('rejects an empty message', () => {
      expect(() => new InvariantViolationError('User.email', '')).toThrow(
        'TypeError: Invariant violation message must not be empty.',
      );
    });

    it('rejects a whitespace-only message', () => {
      expect(() => new InvariantViolationError('User.email', '   ')).toThrow(
        'TypeError: Invariant violation message must not be empty or whitespace.',
      );
    });
  });
});
