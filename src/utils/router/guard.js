/*
 * @Author: maggot-code
 * @Date: 2021-01-04 23:14:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-05 00:05:46
 * @Description: router beforeEach guard
 */
import { getToken } from '@/utils/cache/cookie';

const routerFilter = ({ to, from }, token) => {
    // is power ？
    if (token && to.name === 'login') {
        return { name: 'root' }
    } else if (!token && to.name !== 'login') {
        // tips
        return { name: 'login', query: { redirect: to.name } }
    } else {
        return {}
    }
}

export default ({ to, from }, nextTo) => {
    const token = getToken();
    nextTo(routerFilter({ to, from }, token));
};