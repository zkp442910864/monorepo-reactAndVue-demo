module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard',
        '@vue/typescript/recommended',
		'../../configExtends/vue.eslintrc.js'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    globals: {
    },
};
