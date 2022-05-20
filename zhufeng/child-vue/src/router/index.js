// import Vue from 'vue';
// import * as VueRouter from 'vue-router';

// Vue.use(VueRouter);

// export const routes = [
//     {
//         path: '/HelloWorld',
//         component: () => import('../components/HelloWorld.vue'),
//     },
// ];

// const router = VueRouter.createRouter({
//     mode: 'history',
//     base: '/vue',
//     routes,
// });

// export default router;
import Vue from 'vue';
import VueRouter from 'vue-router';
import AboutComponents from '../About.vue';
import HomeComponents from '../Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/home',
        name: 'home',
        component: HomeComponents,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutComponents,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
