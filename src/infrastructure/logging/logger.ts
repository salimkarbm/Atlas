import pino from 'pino';

import { config } from '@app/config';

export const logger = pino({
  level: config.application.env === 'development' ? 'debug' : 'info',

  transport:
    config.application.env === 'development'
      ? {
          target: 'pino-pretty',
        }
      : undefined,
});
