import 'reflect-metadata';
import dotenv from 'dotenv';

import { createServer } from './app/server';

dotenv.config();

const app = createServer();

const port = Number(process.env.PORT ?? 3000);

app.listen(port, () => {
  console.log(`🚀 Atlas API listening on port ${port}`);
});