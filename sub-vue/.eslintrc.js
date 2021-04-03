module.exports = {
  extends: [
    "plugin:vue/essential",
    "@vue/standard"
  ],
  rules: {
    'no-return-assign': 0,
    semi: ['error', 'never'],
    'no-confusing-arrow': 0,
    'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'never' }],
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    "camelcase": 0
  },
  parserOptions: {
    "ecmaVersion": 7,
    "sourceType": "module",
    "parser": "babel-eslint"
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  }
};
