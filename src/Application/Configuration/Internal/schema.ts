import { z } from 'zod';

export const environmentSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']),

  PORT: z.coerce.number().int().min(1).max(65535).default(3000),

  DATABASE_HOST: z.string().min(1),

  DATABASE_PORT: z.coerce.number().int().min(1).max(65535),

  DATABASE_NAME: z.string().min(1),

  DATABASE_USERNAME: z.string().min(1),

  DATABASE_PASSWORD: z.string(),

  DATABASE_SSL: z.coerce.boolean().default(false),
});

export type Environment = z.infer<typeof environmentSchema>;
