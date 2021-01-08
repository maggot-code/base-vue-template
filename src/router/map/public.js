/*
 * @Author: maggot-code
 * @Date: 2021-01-04 21:38:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-08 12:58:08
 * @Description: router map public
 */
export default [
    {
        path: '/',
        redirect: '/home',
        name: 'root',
        meta: {
            title: "Root"
        }
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: "Login"
        },
        component: () => import('@/views/login.vue')
    },
    {
        path: '/test',
        name: 'test',
        meta: {
            title: 'test'
        },
        component: () => import('@/views/test.vue')
    }
]