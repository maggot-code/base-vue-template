/*
 * @Author: maggot-code
 * @Date: 2021-01-05 21:42:06
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-07 09:30:38
 * @Description: utils notice
 */
import Vue from 'vue'
import { Notification } from 'element-ui';
import { isNil, isObject } from 'lodash';

const NOTICEMSGPOS = {
    info: "bottom-left",
    success: "bottom-right",
    warning: "top-right",
    error: "top-right"
};

let NoticePromise = Promise.resolve();
// 通知
const notice = (params) => {
    if ((isNil(params) && !isObject(params)) || process.env.NODE_ENV !== 'development') {
        Notification.closeAll();
        return false;
    }

    const {
        title,
        message,
        type,
        iconClass,
        duration,
        position,
    } = params;

    const options = {
        customClass: "mg-notice",
        title: title || "通知!",
        message: message || "通知..",
        dangerouslyUseHTMLString: true,
        iconClass: iconClass || "el-icon-s-promotion",
        duration: duration || 5000
    };

    if (!isNil(type)) {
        options.type = type;
    }
    if (isNil(position) && isNil(type)) {
        options.position = "top-right"
    } else {
        options.position = NOTICEMSGPOS[type] || "top-right"
    }

    NoticePromise = NoticePromise.then(Vue.prototype.nextTick).then(() => {
        Notification(options);
    })
}

export default notice