/*
 * @Author: maggot-code
 * @Date: 2021-01-14 10:18:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-14 23:33:44
 * @Description: component mg-form-mixins
 */
import { cloneDeep } from 'lodash';
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
        delCommonProps(protoAttrs) {
            const copyProtoAttrs = cloneDeep(protoAttrs);
            for (const keys in copyProtoAttrs) {
                PropsList.forEach(target => {
                    if (target === keys) {
                        delete copyProtoAttrs[keys]
                    }
                });
            }
            return copyProtoAttrs;
        }
    }
}
