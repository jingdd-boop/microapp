import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import './styles/element-variables.scss';

import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false;
Vue.use(Element);

const apps = [
    {
        name: 'vueApp',
        entry: '//localhost:10000', //默认会加载这个html，解析里面的js 动态执行
        // 子应用需要解决跨域
        container: '#vue', // 容器
        activeRule: '/vue', // 激活路径
    },
    {
        name: 'reactApp',
        entry: '//localhost:20000', //默认会加载这个html，解析里面的js 动态执行
        // 子应用需要解决跨域
        container: '#react',
        activeRule: '/react',
    },
];

registerMicroApps(apps); // 注册应用

start(); // 开启

// 点击按钮再加载子应用
// start({
//     prefetch: false, // 是否开启预加载
// });

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
