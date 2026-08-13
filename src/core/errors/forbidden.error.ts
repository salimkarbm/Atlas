import { DomainError } from './domain.error';

export class ForbiddenError extends DomainError {
  constructor(message: string) {
    super('ForbiddenError', message);
    this.name = 'ForbiddenError';
  }
}
