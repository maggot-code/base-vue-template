/*
 * @Author: maggot-code
 * @Date: 2021-01-04 18:04:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-08 13:07:46
 * @Description: router inlet
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import routerMap from '@/router/map';
import store from '@/store';
import { guard, setTitle } from '@/utils/router';

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
    mode: 'hash',
    routes: [...routerMap]
});

router.beforeEach((to, from, next) => {
    setTitle(to);
    guard({ to, from }, routerPath => next(routerPath));
});

router.afterEach(() => {
    store.dispatch('_setStepping', 1.0)
});

export default router;