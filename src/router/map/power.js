/*
 * @Author: maggot-code
 * @Date: 2021-01-04 21:38:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-08 12:27:57
 * @Description: router map power
 */
export default [
    {
        path: '/home',
        name: 'home',
        meta: {
            title: "Home"
        },
        component: () => import('@/views/home')
    },
    {
        path: '/main',
        name: 'main',
        meta: {
            title: 'Main'
        },
        component: () => import('@/views/main')
    }
]
