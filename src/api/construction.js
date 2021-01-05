/*
 * @Author: maggot-code
 * @Date: 2021-01-04 23:10:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-05 17:13:56
 * @Description: construction api
 */
import { Request } from "@/utils/axios/httpRequest";

export const ping = () => Request({
    url: '/api/v1/ping',
});

export const getHost = () => Request({
    url: '/api/v1/gethost'
});