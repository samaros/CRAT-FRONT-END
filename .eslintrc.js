module.exports = {
  extends: [
    'airbnb-typescript',
    'plugin:jest/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'ignore', ':': 'ignore' } }],
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error',
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'import/no-extraneous-dependencies': 0,
    'react/static-property-placement': 0,
    'import/no-named-as-default-member': 0,
    'import/no-cycle': 0,
    'import/no-named-as-default': 0,
    'import/export': 0,
    'semi': 2,
    'comma-dangle': 2,
    '@typescript-eslint/dot-notation': 0,
    '@typescript-eslint/keyword-spacing': 0,
    '@typescript-eslint/lines-between-class-members': 0,
    "@typescript-eslint/no-explicit-any": 2,
    'object-curly-spacing': 2,
    'no-console': 1,
  },
  overrides: [
    {
      files: ['src/store/**'],
      rules: {
        'import/prefer-default-export': 0,
      },
    },
  ],
  ignorePatterns: '*.js',
  env: {
    browser: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  plugins: [
    'react',
    'import',
    'react-hooks',
    'jest',
    '@typescript-eslint'
  ],
};
