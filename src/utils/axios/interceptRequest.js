/*
 * @Author: maggot-code
 * @Date: 2021-01-05 18:06:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-06 10:17:30
 * @Description: axios interceptRequest
 */
import axios from 'axios';
import store from '@/store';
import { flake } from '@/utils/tool';

const cancelToken = (config) => new axios.CancelToken(cancel => {
    // handler...
    store.dispatch('_joinRequestQueue', {
        requestId: config.requestId,
        requestTag: config.requestTag,
        cancelToken: cancel
    });
})

/**
 * @description: 请求拦截器
 */
const interceptRequest = (instance) => {
    instance.interceptors.request.use(config => {
        const requestId = flake.gen();
        config.requestId = requestId;
        config.cancelToken = cancelToken(config);

        return config;
    }, error => {
        return Promise.reject(error);
    })
}

export default interceptRequest