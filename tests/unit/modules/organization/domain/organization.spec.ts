import { describe, expect, it } from 'vitest';
import { Organization } from '../../../../../src/modules/organization/domain/organization';

describe('Organization', () => {
  const createdAt = new Date('2026-01-01T00:00:00.000Z');
  const updatedAt = new Date('2026-01-01T00:00:00.000Z');

  const validProps = {
    id: 'organization-123',
    name: 'Atlas Organization',
    status: 'active' as const,
    createdAt,
    updatedAt,
  };

  describe('create', () => {
    it('creates an active organization with valid properties', () => {
      const organization = Organization.create(validProps);

      expect(organization.id).toBe('organization-123');
      expect(organization.name).toBe('Atlas Organization');
      expect(organization.status).toBe('active');
      expect(organization.createdAt).toBe(createdAt);
      expect(organization.updatedAt).toBe(updatedAt);
    });

    it('trims surrounding whitespace from the name', () => {
      const organization = Organization.create({
        ...validProps,
        name: '  Atlas Organization  ',
      });

      expect(organization.name).toBe('Atlas Organization');
    });

    it('rejects an empty organization id', () => {
      expect(() =>
        Organization.create({
          ...validProps,
          id: '   ',
        }),
      ).toThrow('Organization ID is required');
    });

    it('rejects an empty organization name', () => {
      expect(() =>
        Organization.create({
          ...validProps,
          name: '   ',
        }),
      ).toThrow('Organization name is required');
    });

    it('rejects a creation date after the update date', () => {
      expect(() =>
        Organization.create({
          ...validProps,
          createdAt: new Date('2026-01-02T00:00:00.000Z'),
          updatedAt: new Date('2026-01-01T00:00:00.000Z'),
        }),
      ).toThrow('Organization creation date cannot be after update date');
    });
  });

  describe('status', () => {
    it('reports an active organization as active', () => {
      const organization = Organization.create(validProps);

      expect(organization.isActive()).toBe(true);
      expect(organization.isSuspended()).toBe(false);
    });

    it('reports a suspended organization as suspended', () => {
      const organization = Organization.create({
        ...validProps,
        status: 'suspended',
      });

      expect(organization.isActive()).toBe(false);
      expect(organization.isSuspended()).toBe(true);
    });
  });
});
