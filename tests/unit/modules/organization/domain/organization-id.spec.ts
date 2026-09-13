import { describe, expect, it } from 'vitest';
import { OrganizationId } from '../../../../../src/modules/organization/domain/organization-id';

describe('OrganizationId', () => {
  describe('create', () => {
    it('creates an organization id from a valid value', () => {
      const organizationId = OrganizationId.create('organization-123');

      expect(organizationId.toString()).toBe('organization-123');
    });

    it('trims surrounding whitespace', () => {
      const organizationId = OrganizationId.create('  organization-123  ');

      expect(organizationId.toString()).toBe('organization-123');
    });

    it('rejects an empty value', () => {
      expect(() => OrganizationId.create('   ')).toThrow('Organization ID is required');
    });
  });

  describe('equals', () => {
    it('considers ids with the same value equal', () => {
      const first = OrganizationId.create('organization-123');
      const second = OrganizationId.create('organization-123');

      expect(first.equals(second)).toBe(true);
    });

    it('considers ids with different values unequal', () => {
      const first = OrganizationId.create('organization-123');
      const second = OrganizationId.create('organization-456');

      expect(first.equals(second)).toBe(false);
    });
  });
});
