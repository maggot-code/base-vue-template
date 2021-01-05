/*
 * @Author: maggot-code
 * @Date: 2021-01-05 09:34:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-05 18:10:34
 * @Description: axios http request
 */
import axios from 'axios';
import { isString, isArray, defaultTo, head } from 'lodash';
import { regEXPUrl } from '@/utils/tool';

import setUpConfig from '@/utils/axios/setUpConfig';
import interceptRequest from '@/utils/axios/interceptRequest';
import interceptResponse from '@/utils/axios/interceptResponse';

/**
 * @description: 通过axios创建一个独立的请求实例
 * @param {String} baseUrl * 基础url地址
 * @param {Object} options {} 请求实例的扩展参数对象
 */
const Send = (baseUrl, options = {}) => {
    const { url, headers } = options;
    if (!url && !isString(url) && !regEXPUrl(url)) {
        return Promise.reject('axios instance need "options.url<String & URL>"');
    }
    if (!baseUrl && !isString(baseUrl) && !regEXPUrl(baseUrl)) {
        return Promise.reject('axios instance need "baseUrl<String & URL>"');
    }

    const instance = axios.create({ baseUrl: baseUrl });
    interceptRequest(instance);
    interceptResponse(instance);

    return instance(Object.assign({}, options, setUpConfig(headers)));
}

/**
 * @description: 资源请求发起方法（多个）
 * @param {Array} requestQueue [] 资源请求实例的列表
 */
const SendAll = (requestQueue = []) => {
    if (!isArray(requestQueue) || requestQueue.length <= 0) {
        return Promise.reject('SendAll need "requestQueue[Array & length > 0]"');
    }

    return new Promise((resolve, reject) => {
        axios.all([...requestQueue])
            .then(axios.spread((...queue) => {
                resolve(queue)
            }))
            .catch(error => {
                // handler...
                reject(error)
            })
    })
}

/**
 * @description: 资源请求发起方法
 * @param {Object} options * 请求实例携带参数
 * @param {String} baseUrl * 请求实例发送地址
 */
const Request = (options, baseUrl = process.env.VUE_APP_BASE_URL) => {
    return new Promise((resolve, reject) => Send(baseUrl, options)
        .then(res => {
            resolve(res)
        })
        .catch(error => {
            // handler...
            reject(error)
        }))
}

export { Request, Send, SendAll };