import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['test/**/*.test.ts', 'test/**/*.spec.ts'],

    environment: 'node',

    globals: true,

    clearMocks: true,

    restoreMocks: true,
  },
});
