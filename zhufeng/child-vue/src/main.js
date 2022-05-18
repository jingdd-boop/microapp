import Vue from 'vue';
import App from './App.vue';
import router from './router';
import singleSpaVue from 'single-spa-vue';

Vue.config.productionTip = false;

const appOptions = {
    el: '#app', //挂载到父应用中的id为vue的标签中
    router,
    render: (h) => h(App),
};

const vueLifeCycle = singleSpaVue({
    Vue,
    appOptions,
});

// 协议接入 子应用定义了协议，父应用调用这些方法
export const bootstrap = vueLifeCycle.bootstrap;
export const mount = vueLifeCycle.mount;
export const unmount = vueLifeCycle.unmount;

// new Vue({
//     router,
//     render: (h) => h(App),
// }).$mount('#app');

// 需要父应用加载子应用，将子应用打包成一个个lib去给父应用使用
// 子应用需要抛出这几个方法
// bootstrap，mount，unmount

// single-spa 子应用需要导入一些方法 / single-spa-vue
// npm install single-spa-vue
