import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts', 'tests/**/*.spec.ts'],

    environment: 'node',

    globals: true,

    clearMocks: true,

    restoreMocks: true,

    globalSetup: ['tests/shared/setup/global-setup.ts'],

    coverage: {
      provider: 'v8',

      reporter: ['text', 'html', 'lcov'],

      include: ['src/**/*.ts'],

      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/test/**',
        '**/migrations/**',
        'src/index.ts',
        '**/*.test.ts',
        '**/*.spec.ts',
      ],
    },
  },
});
