import { createDatabaseConfiguration } from './modules/database';
import { createServerConfiguration } from './modules/server';
import { environmentSchema } from './internal/schema';
import type { ApplicationConfiguration } from './types';
import { ConfigurationError } from '@shared/index';

export function createConfig(source: NodeJS.ProcessEnv = process.env): ApplicationConfiguration {
  const parsed = environmentSchema.safeParse(source);

  if (!parsed.success) {
    throw new ConfigurationError(parsed.error);
  }

  return Object.freeze({
    server: createServerConfiguration(parsed.data),
    database: createDatabaseConfiguration(parsed.data),
  });
}

export const config = createConfig();
