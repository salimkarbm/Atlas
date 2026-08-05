import { DomainError } from './domain.error';

import { z } from 'zod';

export class ConfigurationError extends DomainError {
  constructor(zodError: z.ZodError) {
    const issues = zodError.issues
      .map((i) => {
        const path = i.path.join('.').toUpperCase() || 'CONFIG';
        return `- ${path}: ${i.message}`;
      })
      .join('\n');

    super('ConfigurationError', `Invalid application configuration:\n\n${issues}`);
    this.name = 'ConfigurationError';
  }
}
