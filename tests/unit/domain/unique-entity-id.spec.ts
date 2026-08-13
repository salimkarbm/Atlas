import { describe, expect, it } from 'vitest';

import { UniqueEntityId } from '../../../src/core/domain/unique-entity-id';

describe('UniqueEntityId', () => {
  describe('construction', () => {
    it('generates an identifier when no value is provided', () => {
      const id = new UniqueEntityId();

      expect(id.value).toBeDefined();
      expect(id.value).not.toBe('');
    });

    it('generates a valid UUID v7 when no value is provided', () => {
      const id = new UniqueEntityId();

      expect(id.value).toMatch(
        /^[0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
      );
    });

    it('generates a unique identifier for each instance', () => {
      const first = new UniqueEntityId();
      const second = new UniqueEntityId();

      expect(first.value).not.toBe(second.value);
    });

    it('accepts a valid UUID', () => {
      const value = '550e8400-e29b-41d4-a716-446655440000';

      const id = new UniqueEntityId(value);

      expect(id.value).toBe(value);
    });

    it('preserves the supplied identifier', () => {
      const value = '550e8400-e29b-41d4-a716-446655440000';

      const id = new UniqueEntityId(value);

      expect(id.value).toBe(value);
    });
  });

  describe('validation', () => {
    it('throws when the supplied identifier is invalid', () => {
      expect(() => new UniqueEntityId('not-a-uuid')).toThrow('Invalid entity id.');
    });

    it('throws when the supplied identifier is empty', () => {
      expect(() => new UniqueEntityId('')).toThrow('Invalid entity id.');
    });

    it('throws when the supplied identifier is malformed', () => {
      expect(() => new UniqueEntityId('550e8400-e29b-41d4-a716')).toThrow('Invalid entity id.');
    });
  });

  describe('equality', () => {
    it('returns true when two identifiers have the same value', () => {
      const value = '550e8400-e29b-41d4-a716-446655440000';

      const first = new UniqueEntityId(value);
      const second = new UniqueEntityId(value);

      expect(first.equals(second)).toBe(true);
    });

    it('returns false when two identifiers have different values', () => {
      const first = new UniqueEntityId('550e8400-e29b-41d4-a716-446655440000');

      const second = new UniqueEntityId('550e8400-e29b-41d4-a716-446655440001');

      expect(first.equals(second)).toBe(false);
    });

    it('returns false when compared with undefined', () => {
      const id = new UniqueEntityId('550e8400-e29b-41d4-a716-446655440000');

      expect(id.equals(undefined)).toBe(false);
    });
  });

  describe('string representation', () => {
    it('returns the identifier value from toString()', () => {
      const value = '550e8400-e29b-41d4-a716-446655440000';

      const id = new UniqueEntityId(value);

      expect(id.toString()).toBe(value);
    });
  });
});
