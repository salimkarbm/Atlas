import '@app/config/internal/environment-loader';
import 'reflect-metadata';

import { bootstrap } from '@app/kernel/bootstrap';
import { logger } from '@infra/logging/logger';
import { loadEnvironment } from '@app/config/internal/environment-loader';

function main(): void {
  try {
    loadEnvironment();

    const { kernel, server } = bootstrap();

    const shutdown = async (signal: string): Promise<void> => {
      logger.info({ signal }, 'Shutting down');

      await new Promise<void>((resolve) => {
        server.close(() => {
          resolve();
        });
      });

      await kernel.shutdown();

      logger.info('Shutdown complete');
      process.exit(0);
    };

    process.on('SIGINT', () => {
      void shutdown('SIGINT');
    });
    process.on('SIGTERM', () => {
      void shutdown('SIGTERM');
    });
  } catch (error: unknown) {
    logger.fatal(error as Error, 'Application startup failed');
    process.exit(1);
  }
}

main();
