import { ValidationError } from '../../../core';

export class OrganizationId {
  private constructor(private readonly value: string) {}

  public static create(value: string): OrganizationId {
    const normalizedValue = value.trim();

    if (!normalizedValue) {
      throw new ValidationError('Organization ID is required');
    }

    return new OrganizationId(normalizedValue);
  }

  public toString(): string {
    return this.value;
  }

  public equals(other: OrganizationId): boolean {
    return this.value === other.value;
  }
}
