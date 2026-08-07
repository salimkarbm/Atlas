import { assertPlainObject } from '../../internal';

/**
 * Represents the context of a validation operation.
 *
 * A ValidationContext is an immutable value object that encapsulates
 * the attributes associated with a validation operation. It provides a
 * structured way to pass contextual information to validation routines.
 *
 * The attributes are stored as a plain object and are frozen to prevent
 * mutation after the context is created. This ensures that the validation
 * context remains consistent throughout the validation process.
 */

export class ValidationContext {
  private static readonly EMPTY = new ValidationContext({});

  private readonly _attributes: Readonly<Record<string, unknown>>;

  private constructor(attributes: Readonly<Record<string, unknown>>) {
    this._attributes = Object.freeze({
      ...attributes,
    });
  }

  public static of(attributes?: Readonly<Record<string, unknown>>): ValidationContext {
    if (attributes == undefined) {
      return ValidationContext.EMPTY;
    }

    assertPlainObject(
      attributes,
      'ValidationContext.attributes',
      'Validation context attributes must be a plain object.',
    );

    return new ValidationContext(attributes);
  }

  public get attributes(): Readonly<Record<string, unknown>> {
    return this._attributes;
  }
}
