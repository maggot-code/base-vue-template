/*
 * @Author: maggot-code
 * @Date: 2021-01-14 10:20:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-14 11:17:06
 * @Description: component mg-from -> mg-input mixins
 */
export default {
    name: 'mg-input-mixins',
    props: {
        field: {
            type: String,
            default: () => "defualt",
        },
        value: {
            type: [String, Number],
            default: () => "",
        },
        tag: {
            type: String,
            default: () => ""
        }
    },
    data() {
        //这里存放数据
        return {
            inputValue: this.value,
        };
    },
    //方法集合
    methods: {
        keepValue(value) {
            this.$emit('keepValue', {
                tag: this.tag,
                field: this.field,
                value: value
            })
        },
        input(value) {
            this.$emit("update:value", value);
            this.keepValue(value);
        },
    },
}
