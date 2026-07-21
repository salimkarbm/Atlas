import { env } from './env';

export const databaseConfig = {
  host: env.DB_HOST,
  port: env.DB_PORT,
  // database: env.DB_DATABASE,
  // username: env.DB_USERNAME,
  // password: env.DB_PASSWORD,
  ssl: env.DB_SSL,
} as const;

export type DatabaseConfig = typeof databaseConfig;
