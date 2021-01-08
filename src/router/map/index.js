/*
 * @Author: maggot-code
 * @Date: 2021-01-04 21:37:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-08 11:25:39
 * @Description: router map install
 */
import publicRouter from '@/router/map/public';
import powerRouter from '@/router/map/power';
export default [
    ...publicRouter,
    ...powerRouter,
    {
        path: '*',
        name: "404",
        meta: {
            title: "404"
        },
        component: () => import('@/views/404.vue')
    }
]