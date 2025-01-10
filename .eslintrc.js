module.exports = {
    root: true,
    extends: ['standard', 'plugin:react/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react'],
    overrides: [
        {
            files: ['*.ts', '*.tsx']
        }
    ],
    rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',

        semi: ['error', 'always', { omitLastInOneLineBlock: true }],
        'no-extra-semi': 'error',
        'semi-spacing': ['warn', { before: false, after: true }],

        indent: ['error', 4],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        'quote-props': 'off',

        'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],

        'no-unneeded-ternary': 'off',
        'padded-blocks': 'off',
        'no-var': 'error',

        'no-unused-vars': 'off',
        camelcase: 'off',

        'import/no-unresolved': ['error', { commonjs: true }],
        'import/named': 'error',
        'import/no-unused-modules': ['off', { unusedExports: true }],

        'standard/no-callback-literal': 'off',

        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { functions: true, classes: true, variables: false }],

        'react/prop-types': 0
    },
    settings: {
        react: {
            version: 'detect'
        },
        'import/resolver': {
            typescript: {} // this loads <rootdir>/tsconfig.json to eslint
        }
    }
};
