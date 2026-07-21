import { createServer } from '@app/server';
import { config } from '@app/config';
import { logger } from '@infra/logging/logger';

import { ApplicationKernel } from './application-kernel';

export function bootstrap() {
  const kernel = new ApplicationKernel();

  kernel.initialize();

  const app = createServer();

  const server = app.listen(config.application.port, () => {
    logger.info(
      {
        port: config.application.port,
      },
      'Atlas API started',
    );
  });

  return {
    kernel,
    server,
  };
}
