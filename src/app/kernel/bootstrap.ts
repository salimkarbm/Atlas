import { createServer } from "@app/server";
import { config } from "@app/config";
import { logger } from "@infra/logging/logger";

import { ApplicationKernel } from "./application-kernel";

export async function bootstrap() {
  const kernel = new ApplicationKernel();

  await kernel.initialize();

  const app = createServer();

  const server = app.listen(config.app.port, () => {
    logger.info(
      {
        port: config.app.port,
      },
      "Atlas API started",
    );
  });

  return {
    kernel,
    server,
  };
}