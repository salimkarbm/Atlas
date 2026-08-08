import { container } from './container';
import { TOKENS } from './tokens';

import { logger } from '../logging/logger';

export function registerCore(): void {
  container.registerInstance(TOKENS.Logger, logger);
}
