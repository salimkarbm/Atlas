import { describe, expect, it } from 'vitest';

import { Membership } from '../../../../../src/modules/organization/domain/membership';
import { OrganizationId } from '../../../../../src/modules/organization/domain/organization-id';

describe('Membership', () => {
  const organizationId = OrganizationId.create('org-123');

  const createMembership = () =>
    Membership.create({
      id: 'membership-123',
      userId: 'user-123',
      organizationId,
      status: 'active',
      createdAt: new Date('2026-01-01T00:00:00.000Z'),
      updatedAt: new Date('2026-01-01T00:00:00.000Z'),
    });

  it('creates a membership with valid properties', () => {
    const membership = createMembership();

    expect(membership.id).toBe('membership-123');
    expect(membership.userId).toBe('user-123');
    expect(membership.organizationId).toBe(organizationId);
    expect(membership.status).toBe('active');
  });

  it('rejects an empty membership ID', () => {
    expect(() =>
      Membership.create({
        ...createMembershipProps(),
        id: '   ',
      }),
    ).toThrow('Membership ID is required');
  });

  it('rejects an empty user ID', () => {
    expect(() =>
      Membership.create({
        ...createMembershipProps(),
        userId: '   ',
      }),
    ).toThrow('Membership user ID is required');
  });

  it('rejects a creation date after the update date', () => {
    expect(() =>
      Membership.create({
        ...createMembershipProps(),
        createdAt: new Date('2026-01-02T00:00:00.000Z'),
        updatedAt: new Date('2026-01-01T00:00:00.000Z'),
      }),
    ).toThrow('Membership creation date cannot be after update date');
  });

  it('identifies an active membership', () => {
    const membership = createMembership();

    expect(membership.isActive()).toBe(true);
    expect(membership.isSuspended()).toBe(false);
  });

  it('identifies a suspended membership', () => {
    const membership = Membership.create({
      ...createMembershipProps(),
      status: 'suspended',
    });

    expect(membership.isActive()).toBe(false);
    expect(membership.isSuspended()).toBe(true);
  });

  it('exposes the membership timestamps', () => {
    const membership = createMembership();

    expect(membership.createdAt).toEqual(new Date('2026-01-01T00:00:00.000Z'));
    expect(membership.updatedAt).toEqual(new Date('2026-01-01T00:00:00.000Z'));
  });
});

function createMembershipProps() {
  return {
    id: 'membership-123',
    userId: 'user-123',
    organizationId: OrganizationId.create('org-123'),
    status: 'active' as const,
    createdAt: new Date('2026-01-01T00:00:00.000Z'),
    updatedAt: new Date('2026-01-01T00:00:00.000Z'),
  };
}
