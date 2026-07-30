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

  ...tseslint.configs.strictTypeChecked,

  {
    files: ['**/*.ts'],

    languageOptions: {
      parserOptions: {
        projectService: {
          project: './tsconfig.eslint.json',
        },
      },

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
  // NON-TYPE-CHECKED for config files
  {
    files: [
      '*.config.*',
      'vitest.config.*',
      'eslint.config.*',
      'commitlint.config.*',
      'tests/shared/setup/**/*.ts',
      'src/Infrastructure/Persistence/typeorm/**/*.ts',
    ],
    extends: [tseslint.configs.disableTypeChecked],
  },

  eslintConfigPrettier,
);
