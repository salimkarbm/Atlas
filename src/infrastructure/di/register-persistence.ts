import { DependencyContainer } from 'tsyringe';
import { DataSource } from 'typeorm';
import { dataSource } from '../Persistence';
import { TOKENS } from './tokens';
import { TypeOrmTransactionManager } from '../Persistence/typeorm/transactions';

export function registerPersistence(container: DependencyContainer): void {
  container.registerInstance(DataSource, dataSource);

  container.registerSingleton(TOKENS.TransactionManager, TypeOrmTransactionManager);
}
