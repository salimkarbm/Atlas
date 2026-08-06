import { assertNonEmptyString } from '../../internal/assert';

export class ValidationProfile {
  private readonly _name: string;

  private constructor(name: string) {
    this._name = name;
  }

  public static of(name: string): ValidationProfile {
    const normalizedName = assertNonEmptyString(
      name,
      'ValidationProfile.name',
      'Validation profile name must not be empty or whitespace.',
    );

    return new ValidationProfile(normalizedName);
  }

  public get name(): string {
    return this._name;
  }
}
