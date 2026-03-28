import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import importPlugin from 'eslint-plugin-import'
import globals from 'globals'

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      '@stylistic': stylistic,
      'import': importPlugin,
    },
    rules: {
      'no-console': 'off',
      'no-underscore-dangle': ['error', { allow: ['__dirname', '__filename'] }],
      'max-len': ['error', { code: 120, ignoreComments: true }],
      'import/extensions': ['error', 'ignorePackages'],
      'eol-last': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/arrow-parens': ['error', 'as-needed'],   // главное изменение
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@stylistic/quotes': ['error', 'single'],
    },
  },
  {
    ignores: ['node_modules/', 'coverage/', '__fixtures__/', '*.log', '.DS_Store'],
  },
]
