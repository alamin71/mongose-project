/* eslint-disable no-dupe-keys */
import globals from 'globals';
import pluginJs from '@eslint/js';
import eslint from 'typescript-eslint';

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...eslint.configs.recommended,

  {
    ignores: ['node_modules', 'dist', '.src/config', '.env'],
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
      'no-undef': 'error',
    },
  },
];
