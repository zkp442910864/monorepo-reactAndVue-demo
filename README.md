# monorepo-reactAndVue-demo


### 关于monorepo
>参考资料<br>
>pnpm版本<br>
>>[pnpm 资料](https://zhuanlan.zhihu.com/p/352437367)<br>
>>[pnpm 官网](https://pnpm.io/zh/)<br>

>yarn版本 或 npm版本<br>
>>[monorepo 资料](https://www.zhihu.com/question/318476028/answer/1895685159)<br>
>>[monorepo 资料2](https://blog.csdn.net/qiwoo_weekly/article/details/115713366)<br>
>>[Lerna 资料](https://segmentfault.com/a/1190000019350611)<br>
>>[Lerna 指令](http://www.febeacon.com/lerna-docs-zh-cn/routes/commands/)<br>
>>[storybook 官网](https://storybook.js.org/)<br>
>>[yarn nohoist](https://classic.yarnpkg.com/blog/2018/02/15/nohoist/)<br>
>>[yarn2 目前没用到，但这个可以使用离线依赖](https://www.yarnpkg.cn/getting-started/install)<br>
>>使用库的版本最好都一致<br>
>>[vue-demo(lerna + yarn)](https://github.com/zkp442910864/monorepo-vue-demo)<br>
>>[react(antd-pro)-demo(lerna + yarn)](https://github.com/zkp442910864/monorepo-react-demo)<br>
>>[react-vue-demo(lerna + yarn)](https://github.com/zkp442910864/monorepo-reactAndVue-demo/tree/lerna+yarn)<br>



### 项目初始化
```
    只能用pnpm ，用yarn 和npm 都是不一样的效果

    npm install -g pnpm

    安装依赖并进行关联: pnpm install
        执行后顶层目录（工作空间） node_modules/.pnpm 会有依赖包的缓存文件
        然后项目使用的依赖会直接通过软链接（应该是这样叫）进行关联起来。
        加入新项目的时候，如果依赖一样，就免了下载直接建立起软链接来。

    文档命令: pnpm run story-react
             pnpm run story-vue

    然后到对应的项目执行运行命令
```

### 报错处理
```
    pnpm 不支持幽灵依赖（好像是这样说），都要显示的在package.json 里安装上这个依赖才能正常使用
```

### 包名及引入
```
    本地依赖安装，项目目录下执行 pnpm add 包名 （和安装依赖一样，区别是package.json 版本号显示会不一样）

    package.json (例子: packages\common-utils\package.json)
        设置包名: name (例子: @mono/项目文件名，不要出现重复的名称)
        设置默认导出文件: main
        设置ts声明文件: typings

    引入公共项目的样式文件
        @import '@mono/components-vue/src/assets/common.less';
        包名: @mono/components-vue
        文件所在路径: /src/assets/common.less
```

### 项目管理
```
    注意点：源码引用时候，依赖库版本要相同。可以通过产物（打包后的文件）引用来解决这问题。

    git 项目规划
        首先 mono-repo 做为一个根项目
        然后在 packages 文件夹下添加各个项目（公共项目模块/公司项目）
        注：涉及到项目嵌套，利用git的子模块
            git submodule add https://github.com/chenfengyanyu/fmap-demo.git

    svn 项目规划
        首先 mono-repo 做为一个根项目
        然后在 packages 文件夹下添加各个项目（公共项目模块/公司项目）
        注：涉及到项目嵌套，直接到 packages 文件夹下检出对应的项目（简单的尝试下，貌似不会互相影响）
```

### 目录树生成
>[参考 tree-node-cli](https://www.cnblogs.com/wonz/p/13578242.html)
>>注意在 Git Bash Here 里面执行命令,在 cmd 里面实效了
>> tree -L 5 -I "node_modules" > tree.md

### 目录结构
###### 项目中包含 .stories.js | .stories.mdx 后缀的，都属于文档文件
```
monorepo-reactAndVue-demo-pnpm
├── pnpm-lock.yaml
├── pnpm-workspace.yaml                             pnpm 工作空间标识
├── configExtends                                       存放一些继承配置，建议继承 eslint 文件，统一eslint 规范
│   ├── react.eslintrc.js
│   ├── vue.eslintrc.js
│   └── vue.tsconfig.json
├── packages                                            共用的库，组件
│   ├── common-docs                                     文档demo 以及配置
│   │   ├── ...
│   ├── common-utils                                    工具库(git/svn 上的项目)
│   │   ├── ...
│   ├── components-react                                react 组件库(git/svn 上的项目)
│   │   ├── src
│   │   │   ├── componentsNew                           组件库主目录
│   │   │   │   ├── index.ts                            统一导出
│   │   │   │   └── MyCheckbox                          组件、样式、文档说明（写tsx，这样就免了.d.ts 声明文件）
│   │   └── ...
│   └── components-vue                                  vue 组件库(git/svn 上的项目)
│       ├── src
│       │   ├── assets                                  共用样式
│       │   │   ├── common.less                         统一导出 样式文件
│       │   │   └── ...
│       │   ├── components                              组件库主目录
│       │   │   ├── index.ts                            统一导出
│       │   │   └── MyCheckbox                          组件、样式、文档说明
│       ├── vetur                                   智能提示需要，其它 vue项目 在package.json 中引入
│       │   ├── attributes.json
│       │   ├── README.md
│       │   └── tags.json
│       └── ...
├── projects                                            工作项目(git/svn 上的项目)
│   ├── react-pack                                      项目1
│   │   └── ...
│   └── vue-pack5                                       项目2
│       ├── package.json                            智能提示，加入vetur 字段，并引用文件
│       └── ...
├── tsconfig.json
├── vetur.config.js                                 工作空间，识别 .vue 文件的配置
└── ...
```

