import { DomainError } from './domain.error';

export class InternalError extends DomainError {
  constructor(message = 'Internal server error') {
    super('InternalError', message);
    this.name = 'InternalError';
  }
}
