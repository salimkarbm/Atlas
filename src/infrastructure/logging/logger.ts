import pino from "pino";

import { config } from "@app/config";

export const logger = pino({
  level:
    config.app.env === "development"
      ? "debug"
      : "info",

  transport:
    config.app.env === "development"
      ? {
          target: "pino-pretty",
        }
      : undefined,
});