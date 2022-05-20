/* eslint-disable */
import Vue from 'vue';
import App from './App.vue';
import router from './router';

// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

let instance = null;

function render() {
    instance = new Vue({
        router,
        render: (h) => h(App),
    }).$mount('#app'); // 这个是挂载到自己的html，基座会拿到挂载后的html中
}
if (window.__POWERED_BY_QIANKUN__) {
    // eslint-disable-next-line
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

// 子组件的协议
// eslint-disable-next-line
export async function bootstrap(props) {}

export async function mount(props) {
    render(props);
}
// eslint-disable-next-line
export async function unmount(props) {
    instance.$destory();
}

// 1.49
