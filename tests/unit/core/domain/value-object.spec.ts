import { describe, expect, it } from 'vitest';

import { ValueObject } from '../../../../src/core/domain/value-object';

class TestValueObject extends ValueObject<{
  name: string;
  age: number;
}> {
  public constructor(props: { name: string; age: number }) {
    super(props);
  }

  public get exposedProps(): Readonly<{
    name: string;
    age: number;
  }> {
    return this.props;
  }
}

class NestedValueObject extends ValueObject<{
  user: {
    name: string;
    roles: string[];
  };
}> {
  public constructor(props: {
    user: {
      name: string;
      roles: string[];
    };
  }) {
    super(props);
  }
}

describe('ValueObject', () => {
  describe('construction', () => {
    it('creates a value object with the supplied properties', () => {
      const valueObject = new TestValueObject({
        name: 'Alice',
        age: 30,
      });

      expect(valueObject).toBeInstanceOf(ValueObject);
    });
  });

  describe('equals', () => {
    it('returns true when two value objects have deeply equal properties', () => {
      const first = new TestValueObject({
        name: 'Alice',
        age: 30,
      });

      const second = new TestValueObject({
        name: 'Alice',
        age: 30,
      });

      expect(first.equals(second)).toBe(true);
    });

    it('returns false when properties differ', () => {
      const first = new TestValueObject({
        name: 'Alice',
        age: 30,
      });

      const second = new TestValueObject({
        name: 'Bob',
        age: 30,
      });

      expect(first.equals(second)).toBe(false);
    });

    it('returns false when compared with undefined', () => {
      const valueObject = new TestValueObject({
        name: 'Alice',
        age: 30,
      });

      expect(valueObject.equals(undefined)).toBe(false);
    });

    it('compares nested properties deeply', () => {
      const first = new NestedValueObject({
        user: {
          name: 'Alice',
          roles: ['admin', 'editor'],
        },
      });

      const second = new NestedValueObject({
        user: {
          name: 'Alice',
          roles: ['admin', 'editor'],
        },
      });

      expect(first.equals(second)).toBe(true);
    });

    it('returns false when nested properties differ', () => {
      const first = new NestedValueObject({
        user: {
          name: 'Alice',
          roles: ['admin', 'editor'],
        },
      });

      const second = new NestedValueObject({
        user: {
          name: 'Alice',
          roles: ['admin'],
        },
      });

      expect(first.equals(second)).toBe(false);
    });
  });

  describe('immutability', () => {
    it('freezes the exposed properties', () => {
      const valueObject = new TestValueObject({
        name: 'Alice',
        age: 30,
      });

      expect(Object.isFrozen(valueObject.exposedProps)).toBe(true);

      expect(() => {
        (valueObject.exposedProps as { name: string }).name = 'Bob';
      }).toThrow();

      expect(valueObject.exposedProps.name).toBe('Alice');
    });
  });
});
