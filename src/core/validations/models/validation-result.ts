import { InvariantViolationError } from '../../../Core/errors';

import { ValidationIssue } from './validation-issue';

/**
 * Represents the result of a validation operation, indicating whether the validation was successful or failed.
 *
 * A ValidationResult is an immutable value object that encapsulates the outcome of a validation process.
 * It provides information about the validity of the data and any associated validation issues.
 */

export class ValidationResult {
  private static readonly SUCCESS = new ValidationResult(true, []);

  private readonly _valid: boolean;

  private readonly _issues: readonly ValidationIssue[];

  private constructor(valid: boolean, issues: readonly ValidationIssue[]) {
    this._valid = valid;
    this._issues = Object.freeze([...issues]);
  }

  public static success(): ValidationResult {
    return ValidationResult.SUCCESS;
  }

  public static failure(...issues: readonly ValidationIssue[]): ValidationResult {
    ValidationResult.validateFailureIssues(issues);

    return new ValidationResult(false, issues);
  }

  public get valid(): boolean {
    return this._valid;
  }

  public get invalid(): boolean {
    return !this.valid;
  }

  public get issues(): readonly ValidationIssue[] {
    return this._issues;
  }

  private static validateFailureIssues(issues: readonly ValidationIssue[]): void {
    if (
      (issues as readonly (ValidationIssue | null | undefined)[]).some((issue) => issue == null)
    ) {
      throw new InvariantViolationError(
        'ValidationResult.issues',
        'Validation issues must not contain null or undefined values.',
      );
    }

    if (issues.length === 0) {
      throw new InvariantViolationError(
        'ValidationResult.issues',
        'A failed validation result must contain at least one validation issue.',
      );
    }
  }
}
