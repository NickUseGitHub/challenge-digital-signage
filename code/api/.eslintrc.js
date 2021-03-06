module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      tsx: true, // Allows for the parsing of JSX
    },
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['**/*.test.ts'],
      env: {
        jest: true,
      },
    },
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
      },
    },
  ],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    strict: 0,
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
  },
}
