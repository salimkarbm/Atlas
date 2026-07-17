import { container } from "./container";
import { TOKENS } from "./tokens";

import { logger } from "@infra/logging/logger";

export function registerCore(): void {
  container.registerInstance(
    TOKENS.Logger,
    logger,
  );
}