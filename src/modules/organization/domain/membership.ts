import { InvariantViolationError, ValidationError } from '../../../core';
import { OrganizationId } from './organization-id';

export type MembershipStatus = 'active' | 'suspended';

export interface MembershipProps {
  readonly id: string;
  readonly userId: string;
  readonly organizationId: OrganizationId;
  readonly status: MembershipStatus;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export class Membership {
  private constructor(private readonly props: MembershipProps) {}

  public static create(props: MembershipProps): Membership {
    if (!props.id.trim()) {
      throw new ValidationError('Membership ID is required');
    }

    if (!props.userId.trim()) {
      throw new ValidationError('Membership user ID is required');
    }

    if (props.createdAt > props.updatedAt) {
      throw new InvariantViolationError(
        'MEMBERSHIP.INVALID',
        'Membership creation date cannot be after update date',
      );
    }

    return new Membership(props);
  }

  public get id(): string {
    return this.props.id;
  }

  public get userId(): string {
    return this.props.userId;
  }

  public get organizationId(): OrganizationId {
    return this.props.organizationId;
  }

  public get status(): MembershipStatus {
    return this.props.status;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get updatedAt(): Date {
    return this.props.updatedAt;
  }

  public isActive(): boolean {
    return this.props.status === 'active';
  }

  public isSuspended(): boolean {
    return this.props.status === 'suspended';
  }
}
