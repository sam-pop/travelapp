module.exports = {
    extends: [
        'standard',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['prettier'],
    env: {
        browser: true,
    },
    settings: {
        react: {
            version: '15.0', // React version, default to the latest React stable release
        },
    },
    rules: {
        'prettier/prettier': 'warn',
        quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    },
}
