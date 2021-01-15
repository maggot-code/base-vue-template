/*
 * @Author: maggot-code
 * @Date: 2021-01-14 10:18:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-15 17:08:04
 * @Description: component mg-form-mixins
 */
import { cloneDeep, concat } from 'lodash';
const PropsList = ['field', 'value', 'tag'];
export default {
    name: 'mg-form-mixins',
    props: {
        field: {
            type: String,
            default: () => "defualt",
        },
        value: {
            type: String,
            default: () => "",
        },
        tag: {
            type: String,
            default: () => "default",
        },
    },
    methods: {
        delCommonProps(protoAttrs, fieldList = PropsList) {
            const copyProtoAttrs = cloneDeep(protoAttrs);
            for (const keys in copyProtoAttrs) {
                concat(fieldList, PropsList).forEach(target => {
                    if (target === keys) {
                        delete copyProtoAttrs[keys]
                    }
                });
            }
            return copyProtoAttrs;
        }
    }
}
