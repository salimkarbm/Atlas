import { describe, expect, it } from 'vitest';
import { z } from 'zod';

import { ConfigurationError } from '../../../../src/core/errors/configuration.error';
import { DomainError } from '../../../../src/core/errors/domain.error';

describe('ConfigurationError', () => {
  describe('construction', () => {
    it('creates a ConfigurationError from a ZodError', () => {
      const schema = z.object({
        database: z.object({
          host: z.string(),
        }),
      });

      const result = schema.safeParse({
        database: {
          host: 123,
        },
      });

      if (result.success) {
        throw new Error('Expected schema validation to fail.');
      }

      const error = new ConfigurationError(result.error);

      expect(error).toBeInstanceOf(ConfigurationError);
      expect(error).toBeInstanceOf(DomainError);
      expect(error).toBeInstanceOf(Error);
    });

    it('sets the expected error code', () => {
      const schema = z.object({
        port: z.number(),
      });

      const result = schema.safeParse({
        port: 'invalid',
      });

      if (result.success) {
        throw new Error('Expected schema validation to fail.');
      }

      const error = new ConfigurationError(result.error);

      expect(error.code).toBe('ConfigurationError');
    });

    it('sets the expected error name', () => {
      const schema = z.object({
        port: z.number(),
      });

      const result = schema.safeParse({
        port: 'invalid',
      });

      if (result.success) {
        throw new Error('Expected schema validation to fail.');
      }

      const error = new ConfigurationError(result.error);

      expect(error.name).toBe('ConfigurationError');
    });
  });

  describe('message formatting', () => {
    it('includes the configuration error heading', () => {
      const schema = z.object({
        port: z.number(),
      });

      const result = schema.safeParse({
        port: 'invalid',
      });

      if (result.success) {
        throw new Error('Expected schema validation to fail.');
      }

      const error = new ConfigurationError(result.error);

      expect(error.message).toContain('Invalid application configuration:\n\n');
    });

    it('formats a configuration path in uppercase', () => {
      const schema = z.object({
        database: z.object({
          host: z.string(),
        }),
      });

      const result = schema.safeParse({
        database: {
          host: 123,
        },
      });

      if (result.success) {
        throw new Error('Expected schema validation to fail.');
      }

      const error = new ConfigurationError(result.error);

      expect(error.message).toContain('- DATABASE.HOST:');
    });

    it('preserves the Zod issue message', () => {
      const schema = z.object({
        port: z.number(),
      });

      const result = schema.safeParse({
        port: 'invalid',
      });

      if (result.success) {
        throw new Error('Expected schema validation to fail.');
      }

      const error = new ConfigurationError(result.error);

      expect(error.message).toContain('- PORT:');
    });

    it('uses CONFIG when an issue has an empty path', () => {
      const zodError = new z.ZodError([
        {
          code: 'custom',
          path: [],
          message: 'Invalid configuration.',
        },
      ]);

      const error = new ConfigurationError(zodError);

      expect(error.message).toContain('- CONFIG: Invalid configuration.');
    });

    it('formats nested paths using dot notation', () => {
      const zodError = new z.ZodError([
        {
          code: 'custom',
          path: ['database', 'connection', 'host'],
          message: 'Host is required.',
        },
      ]);

      const error = new ConfigurationError(zodError);

      expect(error.message).toContain('- DATABASE.CONNECTION.HOST: Host is required.');
    });

    it('includes multiple configuration issues', () => {
      const zodError = new z.ZodError([
        {
          code: 'custom',
          path: ['database', 'host'],
          message: 'Host is required.',
        },
        {
          code: 'custom',
          path: ['database', 'port'],
          message: 'Port is required.',
        },
      ]);

      const error = new ConfigurationError(zodError);

      expect(error.message).toContain('- DATABASE.HOST: Host is required.');

      expect(error.message).toContain('- DATABASE.PORT: Port is required.');
    });

    it('separates multiple issues with newlines', () => {
      const zodError = new z.ZodError([
        {
          code: 'custom',
          path: ['database', 'host'],
          message: 'Host is required.',
        },
        {
          code: 'custom',
          path: ['database', 'port'],
          message: 'Port is required.',
        },
      ]);

      const error = new ConfigurationError(zodError);

      expect(error.message).toBe(
        [
          'Invalid application configuration:',
          '',
          '- DATABASE.HOST: Host is required.',
          '- DATABASE.PORT: Port is required.',
        ].join('\n'),
      );
    });
  });
});
