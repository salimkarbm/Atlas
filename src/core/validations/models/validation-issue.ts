import { InvariantViolationError } from '../../errors';
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
    ValidationIssue.validateCode(code);
    ValidationIssue.validateMessage(message);
    ValidationIssue.validatePath(options?.path ?? []);
    ValidationIssue.validateMetadata(options?.metadata ?? {});

    ValidationIssue.validateMetadata(options?.metadata);

    return new ValidationIssue(
      code,
      message,
      options?.path ?? [],
      (options?.metadata ?? {}) as Record<string, unknown>,
    );
  }

  private static validateCode(code: string): void {
    if (code.length === 0 || code.trim().length === 0) {
      throw new InvariantViolationError(
        'ValidationIssue.code',
        'Validation issue code must not be empty or whitespace.',
      );
    }
  }

  private static validateMessage(message: string): void {
    if (message.length === 0 || message.trim().length === 0) {
      throw new InvariantViolationError(
        'ValidationIssue.message',
        'Validation issue message must not be empty or whitespace.',
      );
    }
  }

  private static validatePath(path: readonly string[]): void {
    if (path.some((segment) => segment.trim().length === 0)) {
      throw new InvariantViolationError(
        'ValidationIssue.path',
        'Validation issue path must not contain empty or whitespace-only segments.',
      );
    }
  }

  private static validateMetadata(metadata: unknown): void {
    if (metadata === undefined) {
      return;
    }
    // 1. null
    if (metadata === null) {
      throw new InvariantViolationError(
        'ValidationIssue.metadata',
        'Validation issue metadata must not be null.',
      );
    }

    // 2. not an object at all
    if (typeof metadata !== 'object') {
      throw new InvariantViolationError(
        'ValidationIssue.metadata',
        'Validation issue metadata must be a plain object.',
      );
    }

    // 3. Array, Date, Map, Set, etc. are objects but not plain records
    if (Array.isArray(metadata)) {
      throw new InvariantViolationError(
        'ValidationIssue.metadata',
        'Validation issue metadata must not be an array.',
      );
    }

    if (metadata instanceof Date) {
      throw new InvariantViolationError(
        'ValidationIssue.metadata',
        'Validation issue metadata must not be a Date.',
      );
    }

    if (
      metadata instanceof Map ||
      metadata instanceof Set ||
      metadata instanceof WeakMap ||
      metadata instanceof WeakSet
    ) {
      throw new InvariantViolationError(
        'ValidationIssue.metadata',
        'Validation issue metadata must be a plain object.',
      );
    }

    // 4. Ultimate guard: only [object Object] is allowed
    // This catches any other exotic object
    if (Object.prototype.toString.call(metadata) !== '[object Object]') {
      throw new InvariantViolationError(
        'ValidationIssue.metadata',
        'Validation issue metadata must be a plain object.',
      );
    }
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
