import { describe, expect, it } from 'vitest';

import { Result } from '../../../../src/core/result/result';

describe('Result', () => {
  describe('ok', () => {
    it('creates a successful result', () => {
      const result = Result.ok('success');

      expect(result.isSuccess).toBe(true);
      expect(result.isFailure).toBe(false);
    });

    it('preserves the supplied value', () => {
      const value = { id: 1, name: 'Alice' };

      const result = Result.ok(value);

      expect(result.value).toBe(value);
    });

    it('supports primitive values', () => {
      expect(Result.ok('value').value).toBe('value');
      expect(Result.ok(42).value).toBe(42);
      expect(Result.ok(true).value).toBe(true);
    });

    it('throws when accessing error', () => {
      const result = Result.ok('success');

      expect(() => result.error).toThrow('Cannot access error of a successful result.');
    });
  });

  describe('fail', () => {
    it('creates a failed result', () => {
      const error = new Error('Something went wrong');

      const result = Result.fail(error);

      expect(result.isSuccess).toBe(false);
      expect(result.isFailure).toBe(true);
    });

    it('preserves the supplied error', () => {
      const error = new Error('Something went wrong');

      const result = Result.fail(error);

      expect(result.error).toBe(error);
    });

    it('supports custom error types', () => {
      class CustomError extends Error {}

      const error = new CustomError('Something went wrong');

      const result = Result.fail(error);

      expect(result.error).toBe(error);
      expect(result.error).toBeInstanceOf(CustomError);
    });

    it('throws when accessing value', () => {
      const result = Result.fail(new Error('Something went wrong'));

      expect(() => result.value).toThrow('Cannot access value of a failed result.');
    });
  });

  describe('state', () => {
    it('is mutually exclusive between success and failure', () => {
      const success = Result.ok('success');
      const failure = Result.fail(new Error('failure'));

      expect(success.isSuccess).toBe(true);
      expect(success.isFailure).toBe(false);

      expect(failure.isSuccess).toBe(false);
      expect(failure.isFailure).toBe(true);
    });
  });
});
