import { Membership } from '../domain/membership';
import { MembershipRepository } from '../domain/membership-repository';
import { OrganizationId } from '../domain/organization-id';

export class ResolveMembership {
  public constructor(private readonly memberships: MembershipRepository) {}

  public async execute(userId: string, organizationId: OrganizationId): Promise<Membership | null> {
    const membership = await this.memberships.findByUserAndOrganization(userId, organizationId);

    if (!membership || membership.isSuspended()) {
      return null;
    }

    return membership;
  }
}
