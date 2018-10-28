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
        'array-bracket-spacing': ['error', 'never'],
        'no-unused-vars': ['warn'],
        'comma-dangle': ['warn', 'only-multiline'],
        semi: ['error', 'never'],
        'space-before-function-paren': ['warn', 'never'],
        quotes: ['warn', 'single', { allowTemplateLiterals: true }],
        indent: ['warn', 2],
    },
}
