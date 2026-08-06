import { InvariantViolationError } from '../../errors';

export function assertNonEmptyString(
  value: unknown,
  invariant: string,
  violationMessage: string,
): string {
  if (typeof value !== 'string') {
    throw new InvariantViolationError(invariant, violationMessage);
  }

  const normalizedValue = value.trim();

  if (normalizedValue.length === 0) {
    throw new InvariantViolationError(invariant, violationMessage);
  }

  return normalizedValue;
}
