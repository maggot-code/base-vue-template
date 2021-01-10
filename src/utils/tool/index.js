/*
 * @Author: maggot-code
 * @Date: 2021-01-05 10:53:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-10 17:08:34
 * @Description: utils tool room
 */
import flake from '@/utils/tool/sign';

const errLog = (msg = "") => {
    msg && console.error(`%c ${msg} `, "background:#f56c6c;color:#fff;");
}

const warnLog = (msg = "") => {
    msg && console.warn(`%c ${msg} `, "background:#f56c6c;color:#fff;");
}

const regEXPUrl = (url) => {
    const reg = RegExp(/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/);
    return reg.test(url);
}

const hasOwnProperty = Object.prototype.hasOwnProperty;
const isVNode = (node) => {
    return node !== null && typeof node === 'object' && hasOwnProperty.call(node, 'componentOptions');
}

const propsCheck = (condition, abnormal) => {
    if (!condition) {
        errLog(abnormal)
    }

    return condition;
}

export {
    flake,
    errLog,
    warnLog,
    regEXPUrl,
    isVNode,
    propsCheck
}