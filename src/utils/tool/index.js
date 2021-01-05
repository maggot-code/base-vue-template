/*
 * @Author: maggot-code
 * @Date: 2021-01-05 10:53:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-05 11:16:39
 * @Description: utils tool room
 */
import flake from '@/utils/tool/sign';

const errLog = (msg = "") => {
    msg && console.error(msg);
}

const warnLog = (msg = "") => {
    msg && console.warn(msg);
}

const regEXPUrl = (url) => {
    const reg = RegExp(/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/);
    return reg.test(url);
}

export {
    flake,
    errLog,
    warnLog,
    regEXPUrl
}