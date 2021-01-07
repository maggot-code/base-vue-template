/*
 * @Author: maggot-code
 * @Date: 2021-01-05 18:09:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-06 10:15:45
 * @Description: axios set up config
 */
import { isString } from 'lodash';
import { getToken } from '@/utils/cache/cookie';

const TIMEOUT = 0;
const RESPONSETYPE = "json";
const RESPONSEENCODING = "utf8";
const VALIDATESTATUS = (status) => status < 400;

/**
 * @description: 用于设置axios配置对象，将初始设置与扩展设置参数合并
 */
const setUpConfig = (tag = 'base', headers = {}) => {
    const config = {
        requestTag: isString(tag) ? tag : 'base',
        timeout: TIMEOUT,
        responseType: RESPONSETYPE,
        responseEncoding: RESPONSEENCODING,
        validateStatus: VALIDATESTATUS,
        headers: Object.assign({}, {
            'Access-Control-Allow-Origin': window.location.origin,
        }, headers)
    }

    const token = getToken();
    if (token) {
        config.headers.Authorization = token;
    }

    return config;
}

export default setUpConfig