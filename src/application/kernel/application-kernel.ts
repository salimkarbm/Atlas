import { registerContainer } from '../../infrastructure/di';

export class ApplicationKernel {
  public initialize(): void {
    registerContainer();
  }

  public async shutdown(): Promise<void> {
    await Promise.all([]);
    // Database
    // Redis
    // Queue
  }
}
