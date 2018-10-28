module.exports = {
  extends: ['standard', 'plugin:react/recommended'],
  env: {
    browser: true,
  },
  settings: {
    react: {
      version: '15.0', // React version, default to the latest React stable release
    },
  },
  rules: {
    'comma-dangle': ['warn', 'always'],
    semi: ['error', 'never'],
    'space-before-function-paren': ['warn', 'never'],
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    indent: ['warn', 2],
  },
}
