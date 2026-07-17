export class Result<T> {
    private constructor(
        public readonly isSuccess: boolean,
        public readonly value?: T,
        public readonly error?: Error,
    ) {}

    static ok<T>(value: T) {
        return new Result<T>(true, value);
    }

    static fail(error: Error) {
        return new Result(
            false,
            undefined,
            error,
        );
    }

    isFailure() {
        return !this.isSuccess;
    }
}