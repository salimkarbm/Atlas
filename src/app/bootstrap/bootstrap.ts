import { createServer } from "@app/server";
import { config } from "@app/config";
import { logger } from "@infra/logging/logger";

export async function bootstrap() {
  const app = createServer();

  const server = app.listen(config.app.port, () => {
    logger.info(
      {
        port: config.app.port,
      },
      "Atlas API started",
    );
  });

  return server;
}