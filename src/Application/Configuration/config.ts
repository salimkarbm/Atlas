import { createDatabaseConfiguration } from './Modules/database';
import { createServerConfiguration } from './Modules/server';
import { environmentSchema } from './Internal';
import type { ApplicationConfiguration } from './types';
import { ConfigurationError } from '../../Core/errors/configuration.error';

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
