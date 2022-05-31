const { off } = require('process');

module.exports = {

  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint-config-airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      modules: true,
    },
    ecmaVersion: '2020',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'arrow-body-style': 'off',
    'object-curly-newline': ['error', { multiline: true, minProperties: 4 }],
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'no-shadow': 0,
    'react/prop-types': 0,
    'react/jsx-no-constructed-context-values': 0,
    'react/jsx-props-no-spreading': 0,
    'comma-dangle': 0,
    'react/jsx-uses-vars': 1,
    'react/display-name': 1,
    'no-unused-vars': 'warn',
    'no-console': 1,
    'no-return-assign': 0,
    'no-return-await': 0,
    'import/prefer-default-export': 0,
    'no-unexpected-multiline': 'warn',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    'react/self-closing-comp': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-trailing-spaces': 'warn',
    'no-param-reassign': [0, { props: false }]
  },
};
