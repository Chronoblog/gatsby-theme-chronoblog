module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'react-app',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['node_modules', 'public', 'dist', 'test-builds', 'starters'],
  parser: '@typescript-eslint/parser',
  plugins: ['simple-import-sort', '@typescript-eslint', 'react'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-console': 'warn',
    'prettier/prettier': 'warn',
    quotes: ['error', 'single'],
    'react/jsx-key': 'warn',
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': 'warn',
    'sort-imports': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
