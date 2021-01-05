/*
 * @Author: maggot-code
 * @Date: 2021-01-05 21:59:19
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-05 22:04:13
 * @Description: utils error vue error handler
 */
import Vue from 'vue';
Vue.config.errorHandler = (err, vm, info) => {
    console.log(`vue error:${err}\n vm:${vm}\n info:${info}`);
}
