

### 仅为个人编写习惯

### 参考文献
>[资料1](https://mp.weixin.qq.com/s/dnbflJE7Hqo-KW2j339zlw)<br>
>[资料2](https://mp.weixin.qq.com/s/BP00CNhf7qhVQh8r30tfaA)

```
1.视觉代码
    a)统一的ui框架

2.代码结构
    a)Eslint规则
        i.目前的脚手架都有带，只要在编辑器中打开就可以了，可以根据自己的需求进行部分规则修改。

    b)目录结构
        i.注意点：
            1.尽可能的聚合起来，文件名根据实际情况定义。
            2.写组件尽量是 value 传值，onChange 返回值，组件内容根据value变化而改变。

        ii.文件夹 api 层，各种接口，以及对请求函数(axios，fetch)的深度封装。

        iii.文件夹 assets 资源层，放些其它资源css，js，图片等等

        iv.文件夹 components 全局组件层，基本是对组件进行深度二次封装。组件注释必须有，.d.ts有的话是最好的

        v.文件夹 componentBusiness 业务组件层，要保持组件的通用性，如果耦合性很强不要放这。组件注释必须有，.d.ts有的话是最好的

        vi.文件夹 store 存储层，可以的话只放全局共用的。

        vii.文件夹 view 页面层，以view开头的都放页面文件，路由和文件路径对应起来。
            1.耦合性强，实用性低的组件和对应的页面放在一起，结构可以定为：
                a)inBulk 一些松散的组件，可以对部分内容抽出来成组件，降低页面的复杂度。
                b)modal 弹出层
                c)index.xxx 主页面

        viii.文件夹 router 路由层，路由与页面组件的映射配置。

        ix.文件夹 utils 工具层，可以封装一些常用的函数，然后通过webpack挂载全局，直接进行使用。

    c)README.md 适当的说明信息

3.工具化
    a)基本上直接通过网上现成的脚手架就能完成了，对应的官方文档应该有提供修改资料。

4.生产环境
    a)可以考虑对公共js库css库，通过 webpack 的 externals，抽取出来，进行cdn加速。

5.开发环境
    a)可以使用代理，调用不同环境的接口。
    b)用mock的情况下，大部分场景在开发时候不能真实的反馈出来。

6.模块化
    a)全局组件，工具库，请求函数(axios，fetch)这些可以通过发布npm包，来进行统一，不过这部分要有人根据实际使用需求进行开发。
```

