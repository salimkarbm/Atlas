import { createServer } from '@app/server';
import { config } from '@app/configuration/config';
import { logger } from '@infra/logging/logger';

import { ApplicationKernel } from './application-kernel';

export function bootstrap() {
  const kernel = new ApplicationKernel();

  kernel.initialize();

  const app = createServer();

  const server = app.listen(config.server.port, () => {
    logger.info(
      {
        port: config.server.port,
      },
      'Atlas API started',
    );
  });

  return {
    kernel,
    server,
  };
}
