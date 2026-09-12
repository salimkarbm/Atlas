import { InvariantViolationError, ValidationError } from '../../../core';

export type OrganizationStatus = 'active' | 'suspended';

export interface OrganizationProps {
  readonly id: string;
  readonly name: string;
  readonly status: OrganizationStatus;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export class Organization {
  private constructor(private readonly props: OrganizationProps) {}

  public static create(props: OrganizationProps): Organization {
    if (!props.id.trim()) {
      throw new ValidationError('Organization ID is required');
    }

    if (!props.name.trim()) {
      throw new ValidationError('Organization name is required');
    }

    if (props.createdAt > props.updatedAt) {
      throw new InvariantViolationError(
        'ORGANIZATION.INVALID',
        'Organization creation date cannot be after update date',
      );
    }

    return new Organization({
      ...props,
      name: props.name.trim(),
    });
  }

  public get id(): string {
    return this.props.id;
  }

  public get name(): string {
    return this.props.name;
  }

  public get status(): OrganizationStatus {
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
