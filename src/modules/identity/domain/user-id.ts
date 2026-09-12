import { ValidationError } from '../../../core';

export class UserId {
  private constructor(private readonly value: string) {}

  public static create(value: string): UserId {
    const normalizedValue = value.trim();

    if (!normalizedValue) {
      throw new ValidationError('User ID is required');
    }

    return new UserId(normalizedValue);
  }

  public toString(): string {
    return this.value;
  }

  public equals(other: UserId): boolean {
    return this.value === other.value;
  }
}
