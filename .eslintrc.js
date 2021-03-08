module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  // exclude: ['dist'],
  rules: {
    'prettier/prettier': ['error'],
    'no-console': 'error',
    'no-debugger': 'warn',
    'no-unused-vars': 'error',
    quotes: [1, 'single'],
  },
};
