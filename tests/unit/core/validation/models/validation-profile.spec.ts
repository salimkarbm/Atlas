import { describe, expect, it } from 'vitest';

import { ValidationProfile } from '../../../../../src/Core/validations';
import { expectInvariantViolation } from '../../../../shared/helpers';

describe('ValidationProfile', () => {
  describe('construction', () => {
    it('creates a validation profile', () => {
      const profile = ValidationProfile.of('Create');

      expect(profile.name).toBe('Create');
    });

    it('stores the normalized name', () => {
      const profile = ValidationProfile.of('  Create  ');

      expect(profile.name).toBe('Create');
    });
  });

  describe('factory', () => {
    it('returns a ValidationProfile instance', () => {
      const profile = ValidationProfile.of('Create');

      expect(profile).toBeInstanceOf(ValidationProfile);
    });

    it('returns a new instance for each invocation', () => {
      const first = ValidationProfile.of('Create');

      const second = ValidationProfile.of('Create');

      expect(first).not.toBe(second);
    });
  });

  describe('invariants', () => {
    const invariant = 'ValidationProfile.name';

    const message = 'Validation profile name must not be empty or whitespace.';

    it('rejects null', () => {
      expectInvariantViolation(
        () => ValidationProfile.of(null as unknown as string),
        invariant,
        message,
      );
    });

    it('rejects undefined', () => {
      expectInvariantViolation(
        () => ValidationProfile.of(undefined as unknown as string),
        invariant,
        message,
      );
    });

    it('rejects empty strings', () => {
      expectInvariantViolation(() => ValidationProfile.of(''), invariant, message);
    });

    it('rejects blank strings', () => {
      expectInvariantViolation(() => ValidationProfile.of('     '), invariant, message);
    });

    it('rejects numbers', () => {
      expectInvariantViolation(
        () => ValidationProfile.of(42 as unknown as string),
        invariant,
        message,
      );
    });

    it('rejects booleans', () => {
      expectInvariantViolation(
        () => ValidationProfile.of(true as unknown as string),
        invariant,
        message,
      );
    });

    it('rejects objects', () => {
      expectInvariantViolation(
        () => ValidationProfile.of({} as unknown as string),
        invariant,
        message,
      );
    });

    it('rejects arrays', () => {
      expectInvariantViolation(
        () => ValidationProfile.of([] as unknown as string),
        invariant,
        message,
      );
    });

    it('rejects Date instances', () => {
      expectInvariantViolation(
        () => ValidationProfile.of(new Date() as unknown as string),
        invariant,
        message,
      );
    });

    it('rejects Map instances', () => {
      expectInvariantViolation(
        () => ValidationProfile.of(new Map() as unknown as string),
        invariant,
        message,
      );
    });

    it('rejects Set instances', () => {
      expectInvariantViolation(
        () => ValidationProfile.of(new Set() as unknown as string),
        invariant,
        message,
      );
    });

    it('rejects String object instances', () => {
      expectInvariantViolation(
        () => ValidationProfile.of(new String('Create') as unknown as string),
        invariant,
        message,
      );
    });
  });

  describe('normalization', () => {
    it('trims leading whitespace', () => {
      expect(ValidationProfile.of('   Create').name).toBe('Create');
    });

    it('trims trailing whitespace', () => {
      expect(ValidationProfile.of('Create   ').name).toBe('Create');
    });

    it('trims leading and trailing whitespace', () => {
      expect(ValidationProfile.of('   Create   ').name).toBe('Create');
    });

    it('preserves internal whitespace', () => {
      expect(ValidationProfile.of('Create User').name).toBe('Create User');
    });
  });

  describe('type', () => {
    it('is a ValidationProfile', () => {
      expect(ValidationProfile.of('Create')).toBeInstanceOf(ValidationProfile);
    });
  });
});
