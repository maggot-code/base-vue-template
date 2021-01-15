/*
 * @Author: maggot-code
 * @Date: 2021-01-15 09:18:40
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-15 09:27:57
 * @Description: component mg-from -> mg-radio mixins
 */
import { isArray } from 'lodash';
export default {
    name: 'mg-radio-mixins',
    props: {
        value: {
            type: [String, Number],
            default: () => "",
        },

        border: {
            type: Boolean,
            default: () => true,
        },
    },
    data() {
        //这里存放数据
        return {
            radioValue: this.value,
        };
    },
    watch: {
        value(newVal) {
            this.radioValue = newVal;
        },
    },
    methods: {
        keepValue(value) {
            this.$emit("keepValue", {
                tag: this.tag,
                field: this.field,
                value: value,
            });
        },
        change(value) {
            this.$emit("update:value", value);
            this.keepValue(value);
        },
        checkIsEnums(list) {
            return isArray(list) && list.length > 0;
        },
    }
}
