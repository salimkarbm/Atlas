import { env } from './env';

export const applicationConfig = {
  name: 'Atlas API' as const,
  env: env.NODE_ENV,
  port: env.PORT,
  isDev: env.NODE_ENV === 'development',
  isProd: env.NODE_ENV === 'production',
  isTest: env.NODE_ENV === 'test',
} as const;

export type ApplicationConfig = typeof applicationConfig;
