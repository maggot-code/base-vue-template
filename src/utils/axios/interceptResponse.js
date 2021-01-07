/*
 * @Author: maggot-code
 * @Date: 2021-01-05 18:06:13
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-06 11:12:04
 * @Description: axios interceptResponse
 */
import store from '@/store';

const deleteRequest = (config) => {
    store.dispatch('_removeRequestQueue', config.requestId);
}

const castResponse = (res) => ({
    data: res.data,
    status: res.status,
    statusText: res.statusText,
    headers: res.headers
})

const responseSuccess = (res) => {
    return castResponse(res)
}

const responseRedirect = (res) => {
    return castResponse(res)
}

/**
 * @description: 响应拦截器
 */
const interceptResponse = (instance) => {
    instance.interceptors.response.use(res => {
        deleteRequest(res.config);

        if (res.status >= 200 && res.status < 300) {
            // 200 ~ 300 handler ...
            return responseSuccess(res);
        }
        if (res.status >= 300 && res.status < 400) {
            // 300 ~ 400 handler ...
            return responseRedirect(res);
        }
    }, error => {
        const errorConfig = error.config;
        const errorMessage = error.message;
        const errorResponse = error.response;
        const errorRequest = error.request;

        if (errorResponse) {
            console.log(errorResponse.data);
            console.log(errorResponse.status);
            console.log(errorResponse.headers);
        } else if (errorRequest) {
            console.log(errorRequest);
        }

        return Promise.reject(error);
    })
}

export default interceptResponse