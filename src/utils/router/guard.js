/*
 * @Author: maggot-code
 * @Date: 2021-01-04 23:14:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-08 13:26:43
 * @Description: router beforeEach guard
 */
import { indexOf } from 'lodash';
import { getToken } from '@/utils/cache/cookie';

// 路由白名单
const RouterWhiteList = ['test', '404'];

const routerFilter = ({ to, from }, token) => {
    // is power ?
    if (indexOf(RouterWhiteList, to.name) >= 0) {
        return {}
    } else {
        if (token && to.name === 'login') {
            // tips
            return { name: from.name }
        } else if (!token && to.name !== 'login' && to.name !== from.name) {
            // tips
            return { name: 'login', query: { redirect: to.name || 'root', t: new Date().getTime() } }
        } else {
            return {}
        }
    }
}

export default ({ to, from }, nextTo) => {
    return nextTo(routerFilter({ to, from }, getToken()))
};