/*
 * @Author: maggot-code
 * @Date: 2021-01-04 18:05:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-04 23:53:05
 * @Description: config options
 */
import httpStatusCode from '@/config/http-status';

export const httpStatus = httpStatusCode;
export const axiosOptions = {
    https: false,
    progress: false,
    withCredentials: false,
    timeout: 60000,
    retry: 2,
    retryDelay: 1000,
};
export const TOKENKEY = 'cw_token';