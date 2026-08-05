import { DomainError } from './domain.error';

/**
 * Represents the failure to satisfy a Core value object's invariant.
 *
 * An InvariantViolationError indicates that construction of a Core
 * value object failed because one or more required invariants were
 * violated.
 */
export class InvariantViolationError extends DomainError {
  private readonly _invariant: string;

  public constructor(invariant: string, message: string) {
    if (invariant.length === 0) {
      throw new TypeError('TypeError: Invariant identifier must not be empty.');
    }
    if (invariant.trim().length === 0) {
      throw new TypeError('TypeError: Invariant identifier must not be empty or whitespace.');
    }
    if (message.length === 0) {
      throw new TypeError('TypeError: Invariant violation message must not be empty.');
    }
    if (message.trim().length === 0) {
      throw new TypeError(
        'TypeError: Invariant violation message must not be empty or whitespace.',
      );
    }

    super(invariant, message);

    // Set the prototype explicitly to maintain the correct prototype chain
    Object.setPrototypeOf(this, new.target.prototype);

    this._invariant = invariant;
  }

  public get invariant(): string {
    return this._invariant;
  }

  private static validateInvariant(invariant: string): void {
    if (invariant.trim().length === 0) {
      throw new TypeError('TypeError: Invariant identifier must not be empty or whitespace.');
    }
  }

  private static validateMessage(message: string): void {
    if (message.trim().length === 0) {
      throw new TypeError(
        'TypeError: Invariant violation message must not be empty or whitespace.',
      );
    }
  }
}
