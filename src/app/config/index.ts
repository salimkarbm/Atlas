import { applicationConfig } from './application';
import { authConfig } from './auth';
import { databaseConfig } from './database';
import { redisConfig } from './redis';
import { storageConfig } from './storage';

export const config = Object.freeze({
  application: applicationConfig,
  auth: authConfig,
  database: databaseConfig,
  redis: redisConfig,
  storage: storageConfig,
});
