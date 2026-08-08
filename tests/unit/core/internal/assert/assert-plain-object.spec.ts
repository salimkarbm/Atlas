import { describe, expect, it } from 'vitest';

import { expectInvariantViolation } from '../../../../shared/helpers';
import { assertPlainObject } from '../../../../../src/core/internal';

describe('assertPlainObject', () => {
  const invariant = 'Test.object';

  const violationMessage = 'Value must be a plain object.';

  describe('accepts', () => {
    it('accepts an empty object', () => {
      expect(() => assertPlainObject({}, invariant, violationMessage)).not.toThrow();
    });

    it('accepts a populated object', () => {
      expect(() =>
        assertPlainObject(
          {
            id: 1,
            name: 'Atlas',
          },
          invariant,
          violationMessage,
        ),
      ).not.toThrow();
    });

    it('accepts an object created with a null prototype', () => {
      expect(() =>
        assertPlainObject(Object.create(null), invariant, violationMessage),
      ).not.toThrow();
    });
  });

  describe('rejects', () => {
    it('rejects null', () => {
      expectInvariantViolation(
        () => assertPlainObject(null, invariant, violationMessage),
        invariant,
        violationMessage,
      );
    });

    it('rejects undefined', () => {
      expectInvariantViolation(
        () => assertPlainObject(undefined, invariant, violationMessage),
        invariant,
        violationMessage,
      );
    });

    it('rejects arrays', () => {
      expectInvariantViolation(
        () => assertPlainObject([], invariant, violationMessage),
        invariant,
        violationMessage,
      );
    });

    it('rejects Date instances', () => {
      expectInvariantViolation(
        () => assertPlainObject(new Date(), invariant, violationMessage),
        invariant,
        violationMessage,
      );
    });

    it('rejects Map instances', () => {
      expectInvariantViolation(
        () => assertPlainObject(new Map(), invariant, violationMessage),
        invariant,
        violationMessage,
      );
    });

    it('rejects Set instances', () => {
      expectInvariantViolation(
        () => assertPlainObject(new Set(), invariant, violationMessage),
        invariant,
        violationMessage,
      );
    });

    it('rejects functions', () => {
      expectInvariantViolation(
        () => assertPlainObject(() => {}, invariant, violationMessage),
        invariant,
        violationMessage,
      );
    });

    it('rejects strings', () => {
      expectInvariantViolation(
        () => assertPlainObject('atlas', invariant, violationMessage),
        invariant,
        violationMessage,
      );
    });

    it('rejects numbers', () => {
      expectInvariantViolation(
        () => assertPlainObject(42, invariant, violationMessage),
        invariant,
        violationMessage,
      );
    });

    it('rejects booleans', () => {
      expectInvariantViolation(
        () => assertPlainObject(true, invariant, violationMessage),
        invariant,
        violationMessage,
      );
    });

    it('rejects bigint values', () => {
      expectInvariantViolation(
        () => assertPlainObject(42n, invariant, violationMessage),
        invariant,
        violationMessage,
      );
    });

    it('rejects symbols', () => {
      expectInvariantViolation(
        () => assertPlainObject(Symbol('atlas'), invariant, violationMessage),
        invariant,
        violationMessage,
      );
    });

    it('rejects class instances', () => {
      class Example {}

      expectInvariantViolation(
        () => assertPlainObject(new Example(), invariant, violationMessage),
        invariant,
        violationMessage,
      );
    });
  });

  describe('type safety', () => {
    it('returns undefined for valid objects', () => {
      expect(assertPlainObject({}, invariant, violationMessage)).toBeUndefined();
    });

    it('does not mutate the supplied object', () => {
      const object = {
        id: 1,
        name: 'Atlas',
      };

      assertPlainObject(object, invariant, violationMessage);

      expect(object).toEqual({
        id: 1,
        name: 'Atlas',
      });
    });
  });
});
