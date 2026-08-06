import { assertNonEmptyString, assertPlainObject } from '../../internal';
/**
 * Represents a single validation finding.
 *
 * A ValidationIssue is an immutable value object that describes one
 * validation issue produced during validation.
 */

export class ValidationIssue {
  private readonly _code: string;
  private readonly _message: string;
  private readonly _path: readonly string[];
  private readonly _metadata: Readonly<Record<string, unknown>>;

  private constructor(
    code: string,
    message: string,
    path: readonly string[],
    metadata: Record<string, unknown>,
  ) {
    this._code = code;
    this._message = message;
    this._path = Object.freeze([...path]);
    this._metadata = Object.freeze({ ...metadata });
  }

  public static of(
    code: string,
    message: string,
    options?: {
      path?: readonly string[];
      metadata?: unknown;
    },
  ): ValidationIssue {
    const normalizedCode = assertNonEmptyString(
      code,
      'ValidationIssue.code',
      'Validation issue code must not be empty or whitespace.',
    );

    const normalizedMessage = assertNonEmptyString(
      message,
      'ValidationIssue.message',
      'Validation issue message must not be empty or whitespace.',
    );

    const normalizedPath = (options?.path ?? []).map((segment) =>
      assertNonEmptyString(
        segment,
        'ValidationIssue.path',
        'Validation issue path must not contain empty or whitespace-only segments.',
      ),
    );

    if (options?.metadata !== undefined) {
      assertPlainObject(
        options.metadata,
        'ValidationIssue.metadata',
        'Validation issue metadata must be a plain object.',
      );
    }

    return new ValidationIssue(
      normalizedCode,
      normalizedMessage,
      normalizedPath,
      options?.metadata as Record<string, unknown>,
    );
  }

  public get code(): string {
    return this._code;
  }

  public get message(): string {
    return this._message;
  }

  public get path(): readonly string[] {
    return this._path;
  }

  public get metadata(): Readonly<Record<string, unknown>> {
    return this._metadata;
  }
}
