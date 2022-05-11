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
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
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
