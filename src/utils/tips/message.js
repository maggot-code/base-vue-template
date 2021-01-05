/*
 * @Author: maggot-code
 * @Date: 2021-01-05 21:41:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-05 21:48:25
 * @Description: utils message
 */
import Vue from 'vue'
import { Message } from 'element-ui';

let MessagePromise = Promise.resolve();
// 提示
const message = (text, type = "success") => {
    MessagePromise = MessagePromise.then(Vue.prototype.nextTick).then(() => {
        Message({
            customClass: "mg-message",
            showClose: true,
            center: true,
            duration: 5000,
            dangerouslyUseHTMLString: true,
            message: text,
            type: type,
        })
    })
}

export default message