import { resolve } from 'node:path';

const DATABASE_ROOT = resolve(process.cwd(), 'src', 'infrastructure', 'persistence');

export const DATABASE_PATHS = Object.freeze({
  migrations: resolve(DATABASE_ROOT, 'typeorm', 'migrations', '*.{ts,js}'),
});
