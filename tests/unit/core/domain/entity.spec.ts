import { describe, expect, it } from 'vitest';

import { Entity } from '../../../../src/core/domain/entity';
import { UniqueEntityId } from '../../../../src/core/domain/unique-entity-id';

class TestEntity extends Entity<{ name: string }> {
  public constructor(name: string, id?: UniqueEntityId) {
    super({ name }, id);
  }
}

describe('Entity', () => {
  describe('construction', () => {
    it('creates an entity with a generated identifier when no id is provided', () => {
      const entity = new TestEntity('Alice');

      expect(entity.id).toBeInstanceOf(UniqueEntityId);
      expect(entity.id.value).toBeDefined();
    });

    it('preserves a supplied identifier', () => {
      const id = new UniqueEntityId('550e8400-e29b-41d4-a716-446655440000');

      const entity = new TestEntity('Alice', id);

      expect(entity.id).toBe(id);
    });

    it('generates a different identifier for each entity when no id is supplied', () => {
      const first = new TestEntity('Alice');
      const second = new TestEntity('Alice');

      expect(first.id.value).not.toBe(second.id.value);
    });
  });

  describe('id', () => {
    it('returns the entity identifier', () => {
      const id = new UniqueEntityId('550e8400-e29b-41d4-a716-446655440000');

      const entity = new TestEntity('Alice', id);

      expect(entity.id).toBe(id);
    });
  });

  describe('equals', () => {
    it('returns true when two entities have the same identifier', () => {
      const id = new UniqueEntityId('550e8400-e29b-41d4-a716-446655440000');

      const first = new TestEntity('Alice', id);
      const second = new TestEntity('Bob', id);

      expect(first.equals(second)).toBe(true);
    });

    it('returns false when two entities have different identifiers', () => {
      const first = new TestEntity(
        'Alice',
        new UniqueEntityId('550e8400-e29b-41d4-a716-446655440000'),
      );

      const second = new TestEntity(
        'Alice',
        new UniqueEntityId('550e8400-e29b-41d4-a716-446655440001'),
      );

      expect(first.equals(second)).toBe(false);
    });

    it('returns false when compared with undefined', () => {
      const entity = new TestEntity('Alice');

      expect(entity.equals(undefined)).toBe(false);
    });

    it('uses identity rather than entity properties for equality', () => {
      const id = new UniqueEntityId('550e8400-e29b-41d4-a716-446655440000');

      const first = new TestEntity('Alice', id);
      const second = new TestEntity('Bob', id);

      expect(first.equals(second)).toBe(true);
    });
  });
});
