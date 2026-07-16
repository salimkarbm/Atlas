import { env } from "./env";

export const appConfig = {
  name: "Atlas API",

  env: env.NODE_ENV,

  port: env.PORT,
} as const;