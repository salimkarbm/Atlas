import { describe, expect, it } from 'vitest';

import { DomainError } from '../../../src/core/errors/domain.error';
import { AuthorizationError } from '../../../src/core/errors';
import { ConflictError } from '../../../src/core/errors';
import { ForbiddenError } from '../../../src/core/errors';
import { NotFoundError } from '../../../src/core/errors';
import { ValidationError } from '../../../src/core/errors';

class TestDomainError extends DomainError {
  constructor(code: string, message: string) {
    super(code, message);
  }
}

describe('DomainError', () => {
  describe('construction', () => {
    it('preserves the supplied code', () => {
      const error = new TestDomainError('TEST_ERROR', 'Something went wrong.');

      expect(error.code).toBe('TEST_ERROR');
    });

    it('preserves the supplied message', () => {
      const error = new TestDomainError('TEST_ERROR', 'Something went wrong.');

      expect(error.message).toBe('Something went wrong.');
    });

    it('uses the concrete error class name', () => {
      const error = new TestDomainError('TEST_ERROR', 'Something went wrong.');

      expect(error.name).toBe('TestDomainError');
    });
  });

  describe('inheritance', () => {
    it('is an Error', () => {
      const error = new TestDomainError('TEST_ERROR', 'Something went wrong.');

      expect(error).toBeInstanceOf(Error);
    });

    it('is a DomainError', () => {
      const error = new TestDomainError('TEST_ERROR', 'Something went wrong.');

      expect(error).toBeInstanceOf(DomainError);
    });
  });

  describe('prototype chain', () => {
    it('preserves instanceof behavior for the concrete subclass', () => {
      const error = new TestDomainError('TEST_ERROR', 'Something went wrong.');

      expect(error).toBeInstanceOf(TestDomainError);
    });
  });
});

describe.each([
  ['ConflictError', ConflictError],
  ['ForbiddenError', ForbiddenError],
  ['NotFoundError', NotFoundError],
  ['AuthorizationError', AuthorizationError],
  ['ValidationError', ValidationError],
])('%s', (name, ErrorClass) => {
  it('preserves the supplied message', () => {
    const error = new ErrorClass('Something went wrong.');

    expect(error.message).toBe('Something went wrong.');
  });

  it('sets the expected error code', () => {
    const error = new ErrorClass('Something went wrong.');

    expect(error.code).toBe(name);
  });

  it('sets the expected error name', () => {
    const error = new ErrorClass('Something went wrong.');

    expect(error.name).toBe(name);
  });

  it('is an Error', () => {
    const error = new ErrorClass('Something went wrong.');

    expect(error).toBeInstanceOf(Error);
  });

  it('is a DomainError', () => {
    const error = new ErrorClass('Something went wrong.');

    expect(error).toBeInstanceOf(DomainError);
  });

  it('is an instance of its concrete error class', () => {
    const error = new ErrorClass('Something went wrong.');

    expect(error).toBeInstanceOf(ErrorClass);
  });
});
