import { container } from './container';
import { TOKENS } from './tokens';

import { logger } from '../Logging/logger';

export function registerCore(): void {
  container.registerInstance(TOKENS.Logger, logger);
}
