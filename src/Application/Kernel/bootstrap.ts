import { createServer } from '../Server';
import { config } from '../Configuration/config';
import { logger } from '../../Infrastructure/Logging';

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
