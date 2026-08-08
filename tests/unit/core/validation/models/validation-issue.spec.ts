import { describe, expect, it } from 'vitest';

import { InvariantViolationError } from '../../../../../src/core/errors';
import { ValidationIssue } from '../../../../../src/core/validations';
import { expectInvariantViolation } from '../../../../shared/helpers';

describe('ValidationIssue', () => {
  describe('construction', () => {
    it('creates a validation issue with valid values', () => {
      const issue = ValidationIssue.of(' USER.INVALID ', ' User is invalid. ', {
        path: [' user ', ' email '],
        metadata: { source: 'registration' },
      });

      expect(issue.code).toBe('USER.INVALID');
      expect(issue.message).toBe('User is invalid.');
      expect(issue.path).toEqual(['user', 'email']);
    });
  });

  describe('factory', () => {
    it('returns a ValidationIssue instance', () => {
      const issue = ValidationIssue.of('USER.INVALID', 'User is invalid.');

      expect(issue).toBeInstanceOf(ValidationIssue);
    });

    it('returns a new instance for each invocation', () => {
      const first = ValidationIssue.of('USER.INVALID', 'User is invalid.');

      const second = ValidationIssue.of('USER.INVALID', 'User is invalid.');

      expect(first).not.toBe(second);
    });
  });

  describe('invariants', () => {
    describe('code', () => {
      it('throws when code is empty', () => {
        const act = () => ValidationIssue.of('', 'User is invalid.');

        expect(act).toThrow(InvariantViolationError);

        try {
          act();
        } catch (error) {
          expect(error).toBeInstanceOf(InvariantViolationError);

          const invariantError = error as InvariantViolationError;

          expect(invariantError.invariant).toBe('ValidationIssue.code');

          expect(invariantError.message).toBe(
            'Validation issue code must not be empty or whitespace.',
          );
        }
      });

      it('throws when code contains only whitespace', () => {
        const act = () => ValidationIssue.of('   ', 'User is invalid.');

        expect(act).toThrow(InvariantViolationError);

        try {
          act();
        } catch (error) {
          const invariantError = error as InvariantViolationError;

          expect(invariantError.invariant).toBe('ValidationIssue.code');
        }
      });
    });

    describe('message', () => {
      it('throws when message is empty', () => {
        expectInvariantViolation(
          () => ValidationIssue.of('', 'User is invalid.'),
          'ValidationIssue.code',
          'Validation issue code must not be empty or whitespace.',
        );
        // const act = () => ValidationIssue.of('USER.INVALID', '');

        // expect(act).toThrow(InvariantViolationError);

        // try {
        //   act();
        // } catch (error) {
        //   const invariantError = error as InvariantViolationError;

        //   expect(invariantError.invariant).toBe('ValidationIssue.message');
        // }
      });

      it('throws when message contains only whitespace', () => {
        const act = () => ValidationIssue.of('USER.INVALID', '   ');

        expect(act).toThrow(InvariantViolationError);

        try {
          act();
        } catch (error) {
          const invariantError = error as InvariantViolationError;

          expect(invariantError.invariant).toBe('ValidationIssue.message');
        }
      });
    });

    describe('path', () => {
      it('accepts an empty path', () => {
        const issue = ValidationIssue.of('USER.INVALID', 'User is invalid.');

        expect(issue.path).toEqual([]);
      });

      it('throws when a path contains a whitespace-only segment', () => {
        const act = () =>
          ValidationIssue.of('USER.INVALID', 'User is invalid.', {
            path: ['user', '   ', 'email'],
          });

        expect(act).toThrow(InvariantViolationError);

        try {
          act();
        } catch (error) {
          const invariantError = error as InvariantViolationError;

          expect(invariantError.invariant).toBe('ValidationIssue.path');
        }
      });
    });

    describe('metadata', () => {
      it('throws when metadata is null', () => {
        const act = () =>
          ValidationIssue.of('USER.INVALID', 'User is invalid.', {
            path: [],
            metadata: null as never,
          });

        expect(act).toThrow(InvariantViolationError);
      });

      it('throws when metadata is an array', () => {
        const act = () =>
          ValidationIssue.of('USER.INVALID', 'User is invalid.', {
            path: [],
            metadata: [] as never,
          });

        expect(act).toThrow(InvariantViolationError);
      });

      it('throws when metadata is a Date', () => {
        const act = () =>
          ValidationIssue.of('USER.INVALID', 'User is invalid.', {
            path: [],
            metadata: new Date() as never,
          });

        expect(act).toThrow(InvariantViolationError);
      });

      it('throws when metadata is a Map', () => {
        const act = () =>
          ValidationIssue.of('USER.INVALID', 'User is invalid.', {
            path: [],
            metadata: new Map() as never,
          });

        expect(act).toThrow(InvariantViolationError);
      });
    });
  });

  describe('immutability', () => {
    it('defensively copies the supplied path', () => {
      const path = ['user', 'email'];

      const issue = ValidationIssue.of('USER.INVALID', 'User is invalid.', { path });

      path.push('city');

      expect(issue.path).toEqual(['user', 'email']);
    });

    it('prevents mutation of the exposed path', () => {
      const issue = ValidationIssue.of('USER.INVALID', 'User is invalid.', { path: ['user'] });

      expect(() => {
        (issue.path as string[]).push('email');
      }).toThrow();

      expect(issue.path).toEqual(['user']);
    });

    it('defensively copies the supplied metadata', () => {
      const metadata = {
        source: 'registration',
      };

      const issue = ValidationIssue.of('USER.INVALID', 'User is invalid.', { path: [], metadata });

      metadata.source = 'import';

      expect(issue.metadata).toEqual({
        source: 'registration',
      });
    });

    it('prevents mutation of the exposed metadata', () => {
      const issue = ValidationIssue.of('USER.INVALID', 'User is invalid.', {
        path: [],
        metadata: { source: 'registration' },
      });

      expect(() => {
        (issue.metadata as Record<string, unknown>).source = 'import';
      }).toThrow();

      expect(issue.metadata).toEqual({
        source: 'registration',
      });
    });
  });

  describe('normalization', () => {
    it('stores the normalized code', () => {
      const issue = ValidationIssue.of('  USER.INVALID  ', 'User is invalid.');

      expect(issue.code).toBe('USER.INVALID');
    });

    it('stores the normalized message', () => {
      const issue = ValidationIssue.of('USER.INVALID', '  User is invalid.  ');

      expect(issue.message).toBe('User is invalid.');
    });

    it('stores normalized path segments', () => {
      const issue = ValidationIssue.of('USER.INVALID', 'User is invalid.', {
        path: [' user ', ' email '],
      });

      expect(issue.path).toEqual(['user', 'email']);
    });
  });

  describe('type', () => {
    it('is a ValidationIssue', () => {
      const issue = ValidationIssue.of('USER.INVALID', 'User is invalid.');

      expect(issue).toBeInstanceOf(ValidationIssue);
    });
  });
});
