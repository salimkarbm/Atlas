import { DomainError } from './domain.error';

export class NotFoundError extends DomainError {
  constructor(message: string) {
    super('NotFoundError', message);
    this.name = 'NotFoundError';
  }
}
