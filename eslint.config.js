import globals from 'globals';
import js from '@eslint/js';
import tsEslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import pluginQuery from '@tanstack/eslint-plugin-query';

export default [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.eslintcache',
      '.tsbuildinfo',
      'eslint.config.js',
      'vite.config.*',
      '**/*.config.js',
    ],
  },

  js.configs.recommended,

  // TypeScript — only recommended, NOT strict
  ...tsEslint.configs.recommendedTypeChecked,

  // React
  pluginReact.configs.flat.recommended,

  // React Query
  ...pluginQuery.configs['flat/recommended'],

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        project: './tsconfig.app.json',
        tsconfigRootDir: process.cwd(),
      },
      globals: globals.browser,
      ecmaVersion: 'latest',
    },
    plugins: {
      react: pluginReact,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // React rules
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // Hooks
      'react-hooks/rules-of-hooks': 'error',

      // TypeScript
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],

      // ❗ turn off bad-fit rules
      '@typescript-eslint/no-confusing-void-expression': 'off',
      'import/no-unresolved': 'off',
      'react-hooks/exhaustive-deps': 'off',

      // Turn off strict TS rules
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
    },

    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        typescript: {
          project: './tsconfig.app.json',
        },
      },
    },
  },
];
