import { describe, expect, it } from 'vitest';
import { EmailAddress } from '../../../../../src/modules/identity/domain/email-address';

describe('EmailAddress', () => {
  describe('create', () => {
    it('creates an email address from a valid value', () => {
      const email = EmailAddress.create('[user@example.com](mailto:user@example.com)');

      expect(email.toString()).toBe('[user@example.com](mailto:user@example.com)');
    });

    it('normalizes surrounding whitespace and casing', () => {
      const email = EmailAddress.create('  USER@EXAMPLE.COM  ');

      expect(email.toString()).toBe('user@example.com');
    });

    it('rejects an empty value', () => {
      expect(() => EmailAddress.create('   ')).toThrow('Email address is required');
    });

    it('rejects an invalid email address', () => {
      expect(() => EmailAddress.create('not-an-email')).toThrow('Invalid email address');
    });

    it('rejects an email address without a domain', () => {
      expect(() => EmailAddress.create('user@')).toThrow('Invalid email address');
    });

    it('rejects an email address without a local part', () => {
      expect(() => EmailAddress.create('@example.com')).toThrow('Invalid email address');
    });
  });

  describe('equals', () => {
    it('considers equivalent normalized addresses equal', () => {
      const first = EmailAddress.create('[USER@example.com](mailto:USER@example.com)');
      const second = EmailAddress.create('[user@example.com](mailto:user@example.com)');

      expect(first.equals(second)).toBe(true);
    });

    it('considers different addresses unequal', () => {
      const first = EmailAddress.create('first@example.com');
      const second = EmailAddress.create('second@example.com');

      expect(first.equals(second)).toBe(false);
    });
  });
});
