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
      '**/*.config.js'
    ]
  },

  js.configs.recommended,
  ...tsEslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...pluginQuery.configs['flat/recommended'],

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        project: './tsconfig.app.json',
        tsconfigRootDir: process.cwd()
      },
      globals: globals.browser,
      ecmaVersion: 'latest'
    },
    plugins: {
      react: pluginReact,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      // React rules
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // TypeScript
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' }
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn'
    },

    settings: {
      react: { version: 'detect' }
    }
  }
];
