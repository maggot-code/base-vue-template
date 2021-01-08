/*
 * @Author: maggot-code
 * @Date: 2021-01-08 13:50:10
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-08 17:25:44
 * @Description: utils loading
 */
import { isString, isObject, assignIn } from 'lodash';

const defaults = {
    background: '#EBEEF5',
    customClass: 'mg-loading'
}

const setOptions = (options) => {
    if (isString(options)) {
        return assignIn(defaults, { text: options })
    }

    if (isObject(options)) {
        return assignIn(defaults, options)
    }

    return defaults;
}

export default (ElLoading, options) => ElLoading(setOptions(options));
