import "@app/config/load-env";
import "reflect-metadata";

import { bootstrap } from "@app/bootstrap/bootstrap";
import { logger } from "@infra/logging/logger";


async function main() {
  const server = await bootstrap();

  const shutdown = async (signal: string) => {
    logger.info({ signal }, "Shutting down");

    server.close(() => {
      logger.info("HTTP server stopped");

      process.exit(0);
    });
  };

  process.on("SIGINT", () => shutdown("SIGINT"));

  process.on("SIGTERM", () => shutdown("SIGTERM"));
}

main().catch((error) => {
  logger.fatal(error, "Application failed to start");

  process.exit(1);
});