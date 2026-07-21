import type { DataSourceOptions } from 'typeorm';

import { config } from '@app/configuration/config';

export function createDataSourceOptions(): DataSourceOptions {
  return Object.freeze({
    type: 'postgres',

    host: config.database.host,
    port: config.database.port,

    username: config.database.username,
    password: config.database.password,

    database: config.database.database,

    ssl: config.database.ssl,
  });
}
