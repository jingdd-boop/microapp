import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { registerApplication, start } from 'single-spa';

Vue.config.productionTip = false;

registerApplication(
    'myVueApp',
    async () => {
        console.log('加载模块');
    },
    (location) => location.pathname.startsWith('/vue'),
    // 用户切换到/vue的路径下，我需要加载刚才定义的子应用
);

start();

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
