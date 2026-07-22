export interface TransactionManager {
  run<TResult>(work: () => Promise<TResult>): Promise<TResult>;
}
