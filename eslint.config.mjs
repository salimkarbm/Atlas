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
          allowDefaultProject: [
            'vitest.config.ts',
            'eslint.config.mjs',
            '*.config.ts',
            '*.config.js',
          ],
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

  {
    files: ['*.config.ts', '*.config.js', '*.config.mjs', 'vitest.config.ts'],
    extends: [tseslint.configs.disableTypeChecked],
  },

  eslintConfigPrettier,
);
