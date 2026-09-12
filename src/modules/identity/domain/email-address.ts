import { ValidationError } from '../../../core';

export class EmailAddress {
  private constructor(private readonly value: string) {}

  public static create(value: string): EmailAddress {
    const normalizedValue = value.trim().toLowerCase();

    if (!normalizedValue) {
      throw new ValidationError('Email address is required');
    }

    if (!EmailAddress.isValid(normalizedValue)) {
      throw new ValidationError('Invalid email address');
    }

    return new EmailAddress(normalizedValue);
  }

  private static isValid(value: string): boolean {
    return /^[^\s@]+@[^\s@]+.[^\s@]+$/.test(value);
  }

  public toString(): string {
    return this.value;
  }

  public equals(other: EmailAddress): boolean {
    return this.value === other.value;
  }
}
