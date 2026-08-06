import { describe, expect, it } from 'vitest';
import { ValidationContext } from '../../../../../src/Core/validations';
import { expectInvariantViolation } from '../../../../shared/helpers';

describe('ValidationContext', () => {
  describe('Construction', () => {
    it('creates an empty context', () => {
      const context = ValidationContext.of();
      expect(context.attributes).toEqual({});
    });

    it('creates a populated context', () => {
      const context = ValidationContext.of({
        operation: 'create',
        tenantId: 'tenant-1',
      });

      expect(context.attributes).toEqual({
        operation: 'create',
        tenantId: 'tenant-1',
      });
    });
  });

  describe('Factory', () => {
    it('accepts undefined', () => {
      const context = ValidationContext.of(undefined);

      expect(context.attributes).toEqual({});
    });

    it('accepts null as an empty context', () => {
      const context = ValidationContext.of(null as unknown as Readonly<Record<string, unknown>>);

      expect(context.attributes).toEqual({});
    });
  });

  describe('Invariants', () => {
    const invariant = 'ValidationContext.attributes';

    const message = 'Validation context attributes must be a plain object.';

    it('rejects arrays', () => {
      expectInvariantViolation(
        () => ValidationContext.of([] as unknown as Readonly<Record<string, unknown>>),
        invariant,
        message,
      );
    });

    it('rejects Date instances', () => {
      expectInvariantViolation(
        () => ValidationContext.of(new Date() as unknown as Readonly<Record<string, unknown>>),
        invariant,
        message,
      );
    });

    it('rejects Map instances', () => {
      expectInvariantViolation(
        () => ValidationContext.of(new Map() as unknown as Readonly<Record<string, unknown>>),
        invariant,
        message,
      );
    });

    it('rejects Set instances', () => {
      expectInvariantViolation(
        () => ValidationContext.of(new Set() as unknown as Readonly<Record<string, unknown>>),
        invariant,
        message,
      );
    });

    it('rejects functions', () => {
      expectInvariantViolation(
        () => ValidationContext.of((() => {}) as unknown as Readonly<Record<string, unknown>>),
        invariant,
        message,
      );
    });
  });

  describe('Immutability', () => {
    it('defensively copies supplied attributes', () => {
      const attributes = {
        operation: 'create',
      };

      const context = ValidationContext.of(attributes);

      attributes.operation = 'update';
      expect(context.attributes).not.toBe(attributes);
      expect(context.attributes).toEqual({
        operation: 'create',
      });
    });

    it('freezes stored attributes', () => {
      const context = ValidationContext.of({
        operation: 'create',
      });

      expect(Object.isFrozen(context.attributes)).toBe(true);
    });

    it('prevents mutation of stored attributes', () => {
      const context = ValidationContext.of({
        operation: 'create',
      });

      expect(() => {
        (context.attributes as Record<string, unknown>).operation = 'update';
      }).toThrow();
    });
  });

  describe('Preservation', () => {
    it('preserves supplied attributes', () => {
      const context = ValidationContext.of({
        operation: 'create',
        retry: true,
        attempts: 3,
      });

      expect(context.attributes).toEqual({
        operation: 'create',
        retry: true,
        attempts: 3,
      });
    });
  });

  describe('Singleton', () => {
    it('returns the same instance for empty contexts', () => {
      expect(ValidationContext.of()).toBe(ValidationContext.of());
    });

    it('returns different instances for populated contexts', () => {
      expect(
        ValidationContext.of({
          operation: 'create',
        }),
      ).not.toBe(
        ValidationContext.of({
          operation: 'create',
        }),
      );
    });
    it('shares the immutable empty attributes object', () => {
      expect(ValidationContext.of().attributes).toBe(ValidationContext.of().attributes);
    });
  });

  describe('Type', () => {
    it('returns a ValidationContext instance', () => {
      expect(ValidationContext.of()).toBeInstanceOf(ValidationContext);
    });
  });
});
