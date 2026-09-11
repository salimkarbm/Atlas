import { InvariantViolationError, ValidationError } from '../../../core';
import { UserId } from './user-id';

export type UserStatus = 'active' | 'disabled';

export interface UserProps {
  readonly id: UserId;
  readonly email: string;
  readonly status: UserStatus;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export class User {
  private constructor(private readonly props: UserProps) {}

  public static create(props: UserProps): User {
    if (!props.email.trim()) {
      throw new ValidationError('User email is required');
    }

    if (props.createdAt > props.updatedAt) {
      throw new InvariantViolationError(
        'USER.INVALID',
        'User creation date cannot be after update date',
      ); // 500, bug in code
    }

    return new User({
      ...props,
      email: props.email.trim().toLowerCase(),
    });
  }

  public get id(): UserId {
    return this.props.id;
  }

  public get email(): string {
    return this.props.email;
  }

  public get status(): UserStatus {
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

  public isDisabled(): boolean {
    return this.props.status === 'disabled';
  }
}
