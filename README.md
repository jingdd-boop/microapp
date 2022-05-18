# microapp

微前端～

2018 single-spa 是一个用于前端微服务化的 javascript 前端解决方案，（本身没有处理样式隔离，js 执行隔离）实现了路由的劫持和应用加载

2019 qiankun 基于 single-spa 提供了更加开箱即用的 api（single-spa+sandbox+import-html-entry）做到了，技术战无关，并且接入简单

总结：子应用可以独立部署，运行时动态加载主子应用完全解耦，技术栈无关，靠的是协议接入（子应用必须导出 bootstrap，mount，unmount 方法）

iframe？

如果使用 imframe，里面的子应用切换路由时，用户刷新页面就尴尬了

`路由切换了，用户再刷新，回到主应用了`

刷新页面会丢失路由状态

## 应用通信：

-   基于 url 来进行数据传递，但是传递消息的能力比较弱
-   基于 customEvent 实现通信
-   基于 props 主子应用通信
-   使用全局变量，redux 进行通信

## 公共依赖

-   CDN-externals
-   webpack 联邦模块
