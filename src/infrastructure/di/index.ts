import { registerCore } from './register-core';
import { registerPersistence } from './register-persistence';
import { container } from './container';

export function registerContainer(): void {
  registerCore();
  registerPersistence(container);
}
