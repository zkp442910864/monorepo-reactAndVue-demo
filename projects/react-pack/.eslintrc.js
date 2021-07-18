
module.exports = {
    parser: 'babel-eslint',
    extends: [
        'airbnb',
        'prettier',
        'plugin:compat/recommended',
        '../../configExtends/react.eslintrc.js'
    ],
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
        jest: true,
        jasmine: true,
    },
    rules: {},
    settings: {
        polyfills: ['fetch', 'promises', 'url'],
    },
};

