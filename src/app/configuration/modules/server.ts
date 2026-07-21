import type { Environment } from '../internal/schema';
import type { ServerConfiguration } from '../types';

export function createServerConfiguration(environment: Environment): ServerConfiguration {
  return Object.freeze({
    environment: environment.NODE_ENV,
    port: environment.PORT,
  });
}
