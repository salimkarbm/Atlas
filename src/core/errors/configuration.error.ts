import { DomainError } from './domain.error';

export class ConfigurationError extends DomainError {
  constructor(message: string) {
    super(message);
    this.name = 'ConfigurationError';
  }
}
