type Success<T> = {
  readonly success: true;
  readonly value: T;
};

type Failure<E extends Error> = {
  readonly success: false;
  readonly error: E;
};

export class Result<T, E extends Error = Error> {
  private constructor(private readonly state: Success<T> | Failure<E>) {}

  static ok<T>(value: T): Result<T, never> {
    return new Result({ success: true, value });
  }

  static fail<E extends Error>(error: E): Result<never, E> {
    return new Result({ success: false, error });
  }

  get isSuccess(): boolean {
    return this.state.success;
  }

  get isFailure(): boolean {
    return !this.state.success;
  }

  get value(): T {
    if (!this.state.success) {
      throw new Error('Cannot access value of a failed result.');
    }
    return this.state.value;
  }

  get error(): E {
    if (this.state.success) {
      throw new Error('Cannot access error of a successful result.');
    }

    return this.state.error;
  }
}
