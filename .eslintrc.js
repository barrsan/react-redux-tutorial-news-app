module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: ['airbnb', 'react-app', 'plugin:jsx-a11y/recommended', 'prettier'],
  plugins: ['jsx-a11y', 'prettier'],
  rules: {
    semi: 2,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/no-anonymous-default-export': 0,
    'react-hooks/exhaustive-deps': 0,
    'no-case-declarations': 0,
    'no-useless-catch': 0,
    'object-curly-spacing': 1,
    'prettier/prettier': 1,
    'react/prop-types': 0,
  },
};
