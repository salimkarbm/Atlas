import { describe, expect, it } from 'vitest';
import { UserId } from '../../../../../src/modules/identity/domain/user-id';

describe('UserId', () => {
  describe('create', () => {
    it('creates a user id from a valid value', () => {
      const userId = UserId.create('user-123');

      expect(userId.toString()).toBe('user-123');
    });

    it('trims surrounding whitespace', () => {
      const userId = UserId.create('  user-123  ');

      expect(userId.toString()).toBe('user-123');
    });

    it('rejects an empty value', () => {
      expect(() => UserId.create('   ')).toThrow('User ID is required');
    });
  });

  describe('equals', () => {
    it('considers ids with the same value equal', () => {
      const first = UserId.create('user-123');
      const second = UserId.create('user-123');

      expect(first.equals(second)).toBe(true);
    });

    it('considers ids with different values unequal', () => {
      const first = UserId.create('user-123');
      const second = UserId.create('user-456');

      expect(first.equals(second)).toBe(false);
    });
  });
});
