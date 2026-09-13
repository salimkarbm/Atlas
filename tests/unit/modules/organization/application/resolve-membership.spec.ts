import { describe, expect, it, vi } from 'vitest';

import { ResolveMembership } from '../../../../../src/modules/organization/application/resolve-membership';
import { Membership } from '../../../../../src/modules/organization/domain/membership';
import { MembershipRepository } from '../../../../../src/modules/organization/domain/membership-repository';
import { OrganizationId } from '../../../../../src/modules/organization/domain/organization-id';

describe('ResolveMembership', () => {
  const organizationId = OrganizationId.create('org-123');

  const createMembership = (status: 'active' | 'suspended' = 'active'): Membership =>
    Membership.create({
      id: 'membership-123',
      userId: 'user-123',
      organizationId,
      status,
      createdAt: new Date('2026-01-01T00:00:00.000Z'),
      updatedAt: new Date('2026-01-01T00:00:00.000Z'),
    });

  it('returns an active membership', async () => {
    const membership = createMembership();

    const repository: MembershipRepository = {
      findById: vi.fn(),
      findByUserAndOrganization: vi.fn().mockResolvedValue(membership),
      save: vi.fn(),
    };

    const service = new ResolveMembership(repository);

    await expect(service.execute('user-123', organizationId)).resolves.toBe(membership);

    expect(repository.findByUserAndOrganization).toHaveBeenCalledWith('user-123', organizationId);
  });

  it('returns null when membership does not exist', async () => {
    const repository: MembershipRepository = {
      findById: vi.fn(),
      findByUserAndOrganization: vi.fn().mockResolvedValue(null),
      save: vi.fn(),
    };

    const service = new ResolveMembership(repository);

    await expect(service.execute('user-123', organizationId)).resolves.toBeNull();
  });

  it('returns null when membership is suspended', async () => {
    const membership = createMembership('suspended');

    const repository: MembershipRepository = {
      findById: vi.fn(),
      findByUserAndOrganization: vi.fn().mockResolvedValue(membership),
      save: vi.fn(),
    };

    const service = new ResolveMembership(repository);

    await expect(service.execute('user-123', organizationId)).resolves.toBeNull();
  });

  it('propagates repository failures', async () => {
    const error = new Error('Repository failure');

    const repository: MembershipRepository = {
      findById: vi.fn(),
      findByUserAndOrganization: vi.fn().mockRejectedValue(error),
      save: vi.fn(),
    };

    const service = new ResolveMembership(repository);

    await expect(service.execute('user-123', organizationId)).rejects.toBe(error);
  });
});
