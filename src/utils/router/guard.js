/*
 * @Author: maggot-code
 * @Date: 2021-01-04 23:14:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-07 22:32:40
 * @Description: router beforeEach guard
 */
import { indexOf } from 'lodash';
import { getToken } from '@/utils/cache/cookie';

// 路由白名单
const RouterWhiteList = ['404', 'test'];

const routerFilter = ({ to, from }, token) => {
    // is power ?
    if (indexOf(RouterWhiteList, to.name) >= 0) {
        return {}
    } else {
        if (token && to.name === 'login') {
            return { name: 'root' }
        } else if (!token && to.name !== 'login') {
            // tips
            return { name: 'login', query: { redirect: to.name } }
        } else {
            return {}
        }
    }
}

export default ({ to, from }, nextTo) => {
    const token = getToken();
    nextTo(routerFilter({ to, from }, token));
};