export abstract class DomainError extends Error {
  constructor(
    public readonly code: string,
    message: string,
  ) {
    super(message);

    this.name = this.constructor.name;
    // Required for instanceof to work when extending Error in TS
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
