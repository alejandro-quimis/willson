import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import store from '@/store.js';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/mantenimiento/',
            name: 'nuevo mantenimiento',
            component: () => import('./views/Mantenimiento.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '/mantenimiento/:id(\\d+)',
            name: 'mantenimiento',
            component: () => import('./views/Mantenimiento.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '/menu',
            name: 'menu',
            component: () => import('./views/disponibles/Menu.vue')
        },
        {
            path: '/locales',
            name: 'Noticias Locales',
            component: () => import('./views/locales/Menu.vue')
        },
        {
            path: '/gnews',
            name: 'GNews',
            component: () => import('./views/GNews/Menu.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/login.vue')
        },
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (!store.getters.estaLogueado) {
            next({
                path: '/login'
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
