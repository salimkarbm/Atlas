import pino from 'pino';

import { config } from '../../Application/Configuration/config';

export const logger = pino({
  level: config.server.environment === 'development' ? 'debug' : 'info',

  transport:
    config.server.environment === 'development'
      ? {
          target: 'pino-pretty',
        }
      : undefined,
});
