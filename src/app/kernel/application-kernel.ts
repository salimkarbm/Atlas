
import { registerContainer } from "@infra/container";

export class ApplicationKernel {
  public async initialize(): Promise<void> {
    registerContainer();
  }

  public async shutdown(): Promise<void> {
    // Database
    // Redis
    // Queue
  }
}