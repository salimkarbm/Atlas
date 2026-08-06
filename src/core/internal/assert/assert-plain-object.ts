import { InvariantViolationError } from '../../errors';

export function assertPlainObject(
  value: unknown,
  invariant: string,
  violationMessage: string,
): void {
  if (value !== null && typeof value === 'object') {
    const prototype: unknown = Object.getPrototypeOf(value);

    if (prototype === Object.prototype || prototype === null) {
      return;
    }
  }

  throw new InvariantViolationError(invariant, violationMessage);
}
