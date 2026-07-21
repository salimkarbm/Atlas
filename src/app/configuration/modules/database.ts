import type { Environment } from '../internal/schema';
import type { DatabaseConfiguration } from '../types';

export function createDatabaseConfiguration(environment: Environment): DatabaseConfiguration {
  return Object.freeze({
    host: environment.DATABASE_HOST,
    port: environment.DATABASE_PORT,
    database: environment.DATABASE_NAME,
    username: environment.DATABASE_USERNAME,
    password: environment.DATABASE_PASSWORD,
    ssl: environment.DATABASE_SSL,
  });
}
