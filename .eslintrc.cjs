module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'plugin:import/recommended',
        'prettier',
    ],
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    plugins: ['react-refresh', 'prettier', 'simple-import-sort', 'import'],
    rules: {
        'react-refresh/only-export-components': 'off',
        quotes: ['error', 'single'],
        'jsx-quotes': ['error', 'prefer-single'],
        'max-len': [1, 140],
        semi: ['error', 'always'],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: ['multiline-let', 'multiline-const', 'if', 'while', 'switch', 'for', 'do'],
                next: 'return',
            },
        ],
        '@typescript-eslint/no-unused-vars': 'off',
        'no-useless-escape': 'off',
        'no-undef': 'off',
        'no-empty': 'warn',
        'no-useless-catch': 'off',
        'no-inner-declarations': 'off',
        'no-prototype-builtins': 'off',
        'no-async-promise-executor': 'warn',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-unnecessary-type-constraint': 'off',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'import/no-import-module-exports': 0,
        'import/no-unresolved': 0,
        'import/extensions': 0,
        'import/prefer-default-export': 0,
        'prettier/prettier': 2,
        '@typescript-eslint/ban-types': 'warn',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
    },
};
