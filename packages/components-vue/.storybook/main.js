module.exports = {
    stories: [
        // "../packages/**/*.stories.mdx",
        // "../packages/**/*.stories.@(js|jsx|ts|tsx)",

        '../../common-docs/mdx/**/*.stories.mdx',
        '../../common-utils/src/**/*.stories.mdx',

        '../../common-docs/vue-demo/**/*.stories.mdx',
        '../../common-docs/vue-demo/**/*.stories.@(js|jsx|ts|tsx)',

        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        // 工具栏功能
        '@storybook/addon-essentials',
        '@storybook/addon-docs'
    ]
};
