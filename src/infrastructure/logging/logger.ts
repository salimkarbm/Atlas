import pino from 'pino';

import { config } from '../../application/configuration/config';

export const logger = pino({
  level: config.server.environment === 'development' ? 'debug' : 'info',

  transport:
    config.server.environment === 'development'
      ? {
          target: 'pino-pretty',
        }
      : undefined,
});
