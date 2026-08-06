import { assertPlainObject } from '../../internal/assert';

export class ValidationContext {
  private static readonly EMPTY_ATTRIBUTES = Object.freeze({});

  private static readonly EMPTY = new ValidationContext(ValidationContext.EMPTY_ATTRIBUTES);

  private readonly _attributes: Readonly<Record<string, unknown>>;

  private constructor(attributes: Readonly<Record<string, unknown>>) {
    this._attributes = Object.freeze({
      ...attributes,
    });
  }

  public static of(attributes?: Readonly<Record<string, unknown>>): ValidationContext {
    const normalizedAttributes = attributes ?? ValidationContext.EMPTY_ATTRIBUTES;

    if (normalizedAttributes === ValidationContext.EMPTY_ATTRIBUTES) {
      return ValidationContext.EMPTY;
    }

    assertPlainObject(
      normalizedAttributes,
      'ValidationContext.attributes',
      'Validation context attributes must be a plain object.',
    );

    return new ValidationContext(normalizedAttributes);
  }

  public get attributes(): Readonly<Record<string, unknown>> {
    return this._attributes;
  }
}
