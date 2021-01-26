/*
 * @Author: maggot-code
 * @Date: 2021-01-14 10:18:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-26 15:00:07
 * @Description: component mg-form-mixins
 */
import { cloneDeep, concat, assign } from 'lodash';

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
        mold: {
            type: String,
            default: () => "default"
        },
        tag: {
            type: Object,
            default: () => ({
                leaderTag: [],
                workerTag: []
            }),
        }
    },
    methods: {
        keepValue(value, handlerType) {
            this.$emit("update:value", value);

            this.$emit("keepValue", {
                handlerType: handlerType,
                field: this.field,
                value: value,
                tag: this.tag,
            });
        },
        delCommonProps(protoAttrs, fieldList = PropsList) {
            const copyProtoAttrs = cloneDeep(protoAttrs);

            for (const keys in copyProtoAttrs) {
                concat(fieldList, PropsList).forEach(target => target === keys && delete copyProtoAttrs[keys]);
            }

            return copyProtoAttrs;
        },
        delOtherSchema(schema, deleteList = []) {
            const copySchema = cloneDeep(schema);

            for (const keys in copySchema) {
                deleteList.forEach(field => field === keys && delete copySchema[keys]);
            }

            return copySchema;
        },
        mergeSchema(...schema) {
            return assign({}, ...schema)
        }
    }
}
