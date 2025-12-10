import js from '@eslint/js';
import globals from 'globals';
import ts from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import query from '@tanstack/eslint-plugin-query';

export default [
  //
  // 1. Ignore build folders
  //
  {
    ignores: ['dist/**', 'node_modules/**', '.eslintcache', '*.tsbuildinfo']
  },

  //
  // 2. JavaScript + TypeScript recommended rules
  //
  js.configs.recommended,
  ...ts.configs.recommended,
  // ...ts.configs.recommendedTypeChecked, // IMPORTANT: Type-aware linting

  //
  // 3. React + TanStack Query plugins
  //
  react.configs.flat.recommended,
  ...query.configs['flat/recommended'],

  //
  // 4. Project-specific rules
  //
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        project: './tsconfig.app.json',
        tsconfigRootDir: import.meta.dirname
      },
      globals: globals.browser
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },

    settings: {
      react: { version: 'detect' }
    },

    rules: {
      //
      // React
      //
      'react/react-in-jsx-scope': 'off', // Vite auto-import
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off', // Using TypeScript instead

      //
      // React Hooks
      //
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      //
      // TypeScript rules
      //
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ],

      '@typescript-eslint/no-explicit-any': 'warn', // Allow but warn
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-floating-promises': 'error', // Very important
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: {
            arguments: false,
            attributes: false // allow async in JSX attributes (safe for forms)
          }
        }
      ],

      //
      // Sensible TS safety rules (no overkill)
      //
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',

      '@typescript-eslint/prefer-optional-chain': 'error',

      //
      // Vite + React Fast Refresh
      //
      'react-refresh/only-export-components': [
        'off',
        { allowConstantExport: true }
      ]
    }
  }
];
