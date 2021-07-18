import Preview from './config/Preview.vue';

// 同步读取文件，预防文件找不到
const files = require.context('../../common-docs/config', true, /(.js$)/);
let paramsOther = {};
files.keys().forEach((url) => {
    // 配置文件
    if (url.includes('parameters.js')) {
        const child = files(url).default || files(url);
        // tpl[child.name] = child;
        paramsOther = child || {};
    }
});

// 配置参数
export const parameters = {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    ...paramsOther
};

// 包装
export const decorators = [
    () => {
        return {
            components: {
                Preview
            },
            template: '<Preview><story/></Preview>'
        };
    }
];

// 工具栏自定义选项 https://storybook.js.org/docs/vue/essentials/toolbars-and-globals#global-types-toolbar-annotations
export const globalTypes = {
};
