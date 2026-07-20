import { registerContainer } from '@infra/container';

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
