/*
 * @Author: maggot-code
 * @Date: 2021-01-05 09:34:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-05 15:42:49
 * @Description: axios http request
 */
import axios from 'axios';
import { isString, defaultTo, flow } from 'lodash';
import { flake, errLog, regEXPUrl } from '@/utils/tool';

const TIMEOUT = 1000;
const RESPONSETYPE = "json";
const RESPONSEENCODING = "utf8";

/**
 * @description: 用于设置axios配置对象，将初始设置与扩展设置参数合并
 */
const setUpConfig = () => {
    return {};
}

/**
 * @description: 请求拦截器
 */
const interceptRequest = (instance) => {
    instance.interceptors.request.use(config => {
        return config;
    }, error => {
        return Promise.reject(error);
    })
}

/**
 * @description: 响应拦截器
 */
const interceptResponse = (instance) => {
    instance.interceptors.response.use(res => {
        console.log(res);
        return {};
    }, error => {
        return Promise.reject(error);
    })
}

/**
 * @description: 通过axios创建一个独立的请求实例
 * @param {String} baseUrl * 基础url地址
 * @param {Object} options {} 请求实例的扩展参数对象
 */
const send = (baseUrl, options = {}) => {
    const { url } = options;
    if (!url && !isString(url) && !regEXPUrl(url)) {
        return Promise.reject('axios instance need "options.url<String & URL>"');
    }
    if (!baseUrl && !isString(baseUrl) && !regEXPUrl(baseUrl)) {
        return Promise.reject('axios instance need "baseUrl<String & URL>"');
    }

    const instance = axios.create(Object.assign({}, {
        baseUrl: baseUrl
    }, {}));

    interceptRequest(instance);
    interceptResponse(instance);

    return instance(Object.assign({}, options, setUpConfig()));
}

/**
 * @description: 资源请求发起方法
 * @param {Object} options * 请求实例携带参数
 * @param {String} baseUrl * 请求实例发送地址
 */
const Request = (options, baseUrl = process.env.VUE_APP_BASE_URL) => {
    return new Promise((resolve, reject) => send(baseUrl, options)
        .then(res => {
            resolve(res)
        })
        .catch(error => {
            // handler...
            reject(error)
        }))
}

export default Request;