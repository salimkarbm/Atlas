import { injectable, inject } from 'tsyringe';
import { DataSource } from 'typeorm';

import type { TransactionManager } from './transaction-manager.interface';

@injectable()
export class TypeOrmTransactionManager implements TransactionManager {
  constructor(
    @inject(DataSource)
    private readonly dataSource: DataSource,
  ) {}

  public async run<TResult>(work: () => Promise<TResult>): Promise<TResult> {
    return this.dataSource.transaction(async () => work());
  }
}
