/*
 * @Author: maggot-code
 * @Date: 2021-01-04 21:38:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-04 22:48:02
 * @Description: router map public
 */
export default [
    {
        path: '/',
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
]