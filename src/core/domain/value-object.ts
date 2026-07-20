import { isDeepStrictEqual } from 'node:util';

export abstract class ValueObject<T> {
  protected readonly props: Readonly<T>;

  protected constructor(props: T) {
    this.props = Object.freeze(props);
  }

  public equals(other?: ValueObject<T>): boolean {
    return !!other && isDeepStrictEqual(this.props, other.props);
  }
}
