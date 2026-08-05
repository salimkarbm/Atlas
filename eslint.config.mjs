import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: [
      'dist/**',
      'coverage/**',
      'node_modules/**',
      'dist/',
      '.husky/',
      '*.cjs',
      '*.js',
      '*.mjs',
      'commitlint.config.*',
      'eslint.config.mjs',
    ],
  },

  js.configs.recommended,

  // NON-TYPE-CHECKED for config files
  {
    files: [
      '*.config.*',
      'vitest.config.*',
      'eslint.config.*',
      'commitlint.config.*',
      'tests/shared/setup/global-setup.ts',
      'tests/integration/environment.ts',
      'src/Infrastructure/Persistence/typeorm/**/*.ts',
    ],
    extends: [tseslint.configs.disableTypeChecked],
    languageOptions: {
      parser: tseslint.parser,
      globals: { ...globals.node },
    },
  },

  {
    files: ['src/**/*.ts'],
    extends: [...tseslint.configs.strictTypeChecked],
    languageOptions: {
      parserOptions: {
        projectService: {
          project: './tsconfig.eslint.json',
        },
      },
      parser: tseslint.parser,
      globals: {
        ...globals.node,
      },
    },

    rules: {
      'no-console': ['warn'],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
  eslintConfigPrettier,
);
