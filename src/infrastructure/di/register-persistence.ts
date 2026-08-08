import { DependencyContainer } from 'tsyringe';
import { DataSource } from 'typeorm';
import { dataSource } from '../persistence';
import { TOKENS } from './tokens';
import { TypeOrmTransactionManager } from '../persistence/typeorm/transactions';

export function registerPersistence(container: DependencyContainer): void {
  container.registerInstance(DataSource, dataSource);

  container.registerSingleton(TOKENS.TransactionManager, TypeOrmTransactionManager);
}
