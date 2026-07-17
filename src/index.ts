import "@app/config/load-env";
import "reflect-metadata";

import { bootstrap } from "@app/kernel/bootstrap";
import { logger } from "@infra/logging/logger";


async function main() {
  const { kernel, server } = await bootstrap();

  async function shutdown(signal: string) {
    logger.info({ signal }, "Shutting down");

    server.close(async () => {
      await kernel.shutdown();

      logger.info("Shutdown complete");

      process.exit(0);
    });
  }

  process.on("SIGINT", () => shutdown("SIGINT"));
  process.on("SIGTERM", () => shutdown("SIGTERM"));
}

main().catch((error) => {
  logger.fatal(error, "Application startup failed");

  process.exit(1);
});