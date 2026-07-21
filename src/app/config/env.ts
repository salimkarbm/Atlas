import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(3000),

  // DB
  DB_HOST: z.string().default('localhost'),
  DB_PORT: z.coerce.number().default(5432),
  // DB_DATABASE: z.string(),
  // DB_USERNAME: z.string(),
  // DB_PASSWORD: z.string(),
  DB_SSL: z.coerce.boolean().default(false),
});

export type Env = z.infer<typeof envSchema>;

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('❌ Invalid env:', z.prettifyError(parsed.error));
  process.exit(1);
}

export const env = parsed.data;
