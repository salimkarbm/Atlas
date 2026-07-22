import { container } from './container';
import { TOKENS } from './tokens';

import { logger } from '../../infrastructure/logging/logger';

export function registerCore(): void {
  container.registerInstance(TOKENS.Logger, logger);
}
