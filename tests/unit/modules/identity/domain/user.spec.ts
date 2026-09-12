import { describe, expect, it } from 'vitest';
import { User } from '../../../../../src/modules/identity/domain/user';
import { UserId } from '../../../../../src/modules/identity/domain/user-id';
import { EmailAddress } from '../../../../../src/modules/identity/domain/email-address';

describe('User', () => {
  const createdAt = new Date('2026-01-01T00:00:00.000Z');
  const updatedAt = new Date('2026-01-01T00:00:00.000Z');

  const validProps = {
    id: UserId.create('user-123'),
    email: EmailAddress.create('user@example.com'),
    status: 'active' as const,
    createdAt,
    updatedAt,
  };

  describe('create', () => {
    it('creates an active user with valid properties', () => {
      const user = User.create(validProps);

      expect(user.id.toString()).toBe('user-123');
      expect(user.email.toString()).toBe('user@example.com');
      expect(user.status).toBe('active');
      expect(user.createdAt).toBe(createdAt);
      expect(user.updatedAt).toBe(updatedAt);
    });

    it('normalizes the email address', () => {
      const user = User.create({
        ...validProps,
        email: EmailAddress.create('  USER@EXAMPLE.COM  '),
      });

      expect(user.email.toString()).toBe('user@example.com');
    });

    it('rejects an empty user id', () => {
      expect(() =>
        User.create({
          ...validProps,
          id: UserId.create('   '),
        }),
      ).toThrow('User ID is required');
    });

    it('rejects an empty email', () => {
      expect(() =>
        User.create({
          ...validProps,
          email: EmailAddress.create('   '),
        }),
      ).toThrow('Email address is required');
    });

    it('rejects a creation date after the update date', () => {
      expect(() =>
        User.create({
          ...validProps,
          createdAt: new Date('2026-01-02T00:00:00.000Z'),
          updatedAt: new Date('2026-01-01T00:00:00.000Z'),
        }),
      ).toThrow('User creation date cannot be after update date');
    });
  });

  describe('status', () => {
    it('reports an active user as active', () => {
      const user = User.create(validProps);

      expect(user.isActive()).toBe(true);
      expect(user.isDisabled()).toBe(false);
    });

    it('reports a disabled user as disabled', () => {
      const user = User.create({
        ...validProps,
        status: 'disabled',
      });

      expect(user.isActive()).toBe(false);
      expect(user.isDisabled()).toBe(true);
    });
  });
});
