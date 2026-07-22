import type { DataSourceOptions } from 'typeorm';

import { config } from '../../../app/configuration/config';
import { SnakeCaseNamingStrategy } from './naming';
import { DATABASE_PATHS } from '../path';

export function createDataSourceOptions(): DataSourceOptions {
  return {
    type: 'postgres',

    host: config.database.host,
    port: config.database.port,

    username: config.database.username,
    password: config.database.password,

    database: config.database.database,

    ssl: config.database.ssl ? { rejectUnauthorized: false } : false,

    namingStrategy: new SnakeCaseNamingStrategy(),

    migrations: [DATABASE_PATHS.migrations],

    connectTimeoutMS: 10000,
  };
}
