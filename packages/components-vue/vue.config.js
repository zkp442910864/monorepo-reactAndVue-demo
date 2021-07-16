const path = require('path');

module.exports = {

    publicPath: './',
    lintOnSave: true,

    css: {
        // 是否提取css生成单独的文件 默认 true
        // extract: !isBuild,
        // extract: true,
        sourceMap: true,
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './', 'src/assets/params.less')
            ]
        }
    },
    configureWebpack: (config) => {
        // const plugins = [];
        // console.log(config.dev);
        // config.externals = /^(mtPay|template)$/i;

        // config.externals = {
        //     vue: 'Vue',
        //     vuex: 'Vuex',
        //     'vue-router': 'VueRouter',
        //     moment: 'moment',
        //     'ant-design-vue': 'antd',
        //     'vue-i18n': 'VueI18n',
        // };

        // config.plugins = [...plugins, ...config.plugins];
    },

};
