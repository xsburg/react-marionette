module.exports = {
    parser: 'babel-eslint',
    plugins: ['prettier'],
    extends: ['airbnb', 'prettier'],
    env: {
        browser: true,
        es6: true
    },
    globals: {
        jest: true,
        describe: true,
        it: true,
        expect: true,
        beforeEach: true,
        beforeAll: true,
        afterEach: true,
        afterAll: true
    },
    rules: {
        'no-extra-semi': 0,
        'quote-props': 0,
        'no-prototype-builtins': 0,
        'arrow-parens': 0,
        'prefer-rest-params': 0,
        'no-param-reassign': 0,
        'no-underscore-dangle': ['error', { allowAfterThis: true, allowAfterSuper: true }],
        'linebreak-style': 'off',
        'no-return-assign': 0,
        'prefer-arrow-callback': 0,
        'comma-dangle': 0,
        'func-names': 0,
        'spaced-comment': 0,
        'prefer-const': 0,
        'space-before-function-paren': 0,
        'array-bracket-spacing': 0,
        'object-curly-spacing': 0,
        strict: 0,
        'arrow-body-style': 0,
        'object-shorthand': 0,
        'no-useless-constructor': 0,
        'no-trailing-spaces': 0,
        'no-unused-vars': 0,
        'max-len': [
            2,
            160,
            4,
            {
                ignoreUrls: true,
                ignoreComments: false
            }
        ],
        'react/jsx-indent': 0,
        'react/jsx-indent-props': 0,
        'react/require-default-props': 0,
        'react/forbid-prop-types': 0,
        'react/no-unused-prop-types': 0
    }
};
