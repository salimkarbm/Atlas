import { expect } from 'vitest';
import { InvariantViolationError } from '../../../src/Core/errors';

export function expectInvariantViolation(
  act: () => unknown,
  expectedInvariant: string,
  expectedMessage: string,
): void {
  expect(act).toThrow(InvariantViolationError);

  try {
    act();

    throw new Error('Expected InvariantViolationError to be thrown.');
  } catch (error) {
    expect(error).toBeInstanceOf(InvariantViolationError);

    const invariantError = error as InvariantViolationError;

    expect(invariantError.invariant).toBe(expectedInvariant);

    expect(invariantError.message).toBe(expectedMessage);
  }
}
