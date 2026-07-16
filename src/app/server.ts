import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import { healthRouter } from './routes/health.route';

export function createServer() {
  const app = express();

  app.disable('x-powered-by');

  app.use(helmet());
  app.use(cors());
  app.use(compression());

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/health', healthRouter);

  return app;
}