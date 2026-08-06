import { assertPlainObject } from '../../internal';

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
