import { Membership } from './membership';
import { OrganizationId } from './organization-id';

export interface MembershipRepository {
  findById(id: string): Promise<Membership | null>;

  findByUserAndOrganization(
    userId: string,
    organizationId: OrganizationId,
  ): Promise<Membership | null>;

  save(membership: Membership): Promise<void>;
}
