## 实践

首先·创建一个 react 基座项目：
npx create-react-app qiankun-base

安装 qiankun：
npm i qiankun -S

注册微应用并启动：
在 react 项目中使用 qiankun 只需将官网的代码复制粘贴到 index.js 中即可

```js
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:3000',
    container: '#container',
    activeRule: '/app-react',
  },
  {
    name: 'vueApp',
    entry: '//localhost:8080',
    container: '#container',
    activeRule: '/app-vue',
  },
]);
// 启动 qiankun
start();
```

qiankun 是通过路由的变化来匹配微应用的，所以在基座中我们还应该加上路由，在 react 中，即 react-router-dom 。

创建子应用
使用两个主流的前端框架 react 和 vue 来创建子应用，在子应用中要做的事情其实很简单，只需要导出子应用的生命周期即可，注意此处的生命周期并非指的是框架的生命周期。而是由 qiankun 规定的三种生命周期，分别是：bootstrap、mount、 unmount

```js
/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {}
```
