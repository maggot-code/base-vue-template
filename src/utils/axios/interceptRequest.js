/*
 * @Author: maggot-code
 * @Date: 2021-01-05 18:06:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-05 18:11:05
 * @Description: axios interceptRequest
 */
import axios from 'axios';
import { flake } from '@/utils/tool';

const cancelToken = (requestId) => new axios.CancelToken(cancel => {
    // handler...
})

/**
 * @description: 请求拦截器
 */
const interceptRequest = (instance) => {
    instance.interceptors.request.use(config => {
        const requestId = flake.gen();
        config.cancelToken = cancelToken(requestId);
        config.requestId = requestId;

        return config;
    }, error => {
        return Promise.reject(error);
    })
}

export default interceptRequest