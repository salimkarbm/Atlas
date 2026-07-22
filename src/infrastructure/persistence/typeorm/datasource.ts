import { DataSource } from 'typeorm';

import { createDataSourceOptions } from './options';

export const dataSource = new DataSource(createDataSourceOptions());
