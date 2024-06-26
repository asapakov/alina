module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', 'prettier'],
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/prefer-nullish-coalescing': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/restrict-plus-operands': 0,
    '@typescript-eslint/restrict-template-expressions': 0,
    '@typescript-eslint/no-confusing-void-expression': 0,
    'no-tabs': 0,
    'react/react-in-jsx-scope': 0,
    'no-redeclare': 0,
  },
};
