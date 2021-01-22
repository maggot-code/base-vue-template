<!--
 * @Author: maggot-code
 * @Date: 2021-01-20 11:10:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-21 17:57:17
 * @Description: component mg-from -> mg-time-fixed VUE
-->
<template>
    <el-time-select
        class="mg-time-fixed"
        v-model="timeValue"
        v-bind="options"
        @change="change"
    >
    </el-time-select>
</template>

<script>
import { assign, has } from "lodash";
import {
    isDateObject,
    isDate,
    toDate,
    formatDate,
    parseDate,
    getDayCountOfMonth,
    getDayCountOfYear,
    prevDate,
    nextDate,
    extractFormat,
    extractDate,
} from "@/utils/date";
import defaultOptions from "./options";
import MgFormMixins from "@/components/mg-form/mixins/mg-form-mixins";

const DefPickerOptions = {
    start: "00:00",
    end: "23:00",
    step: "01:00",
};

export default {
    name: "mg-time-fixed",
    mixins: [MgFormMixins],
    components: {},
    props: {
        value: {
            type: [String, Date],
            default: () => "",
        },

        placeholder: {
            type: String,
            default: () => "请选择时间",
        },
        "start-placeholder": {
            type: String,
            default: () => "请选择开始时间",
        },
        "end-placeholder": {
            type: String,
            default: () => "请选择结束时间",
        },
    },
    data() {
        //这里存放数据
        return {
            timeValue: this.value,
        };
    },
    //监听属性 类似于data概念
    computed: {
        options: (vm) => {
            const { mold } = vm.$attrs;
            const keysList = Object.keys(DefPickerOptions).map((keys) => keys);

            const pickerOptions = vm.setupPickerOptions(vm.$attrs, keysList);
            const defOptions = defaultOptions[mold] || defaultOptions.default;
            const protoAttrs = assign(
                {},
                defOptions,
                vm.$props,
                vm.$attrs,
                pickerOptions
            );

            return vm.delCommonProps(protoAttrs, [...keysList]);
        },
    },
    //监控data中的数据变化
    watch: {
        value(newVal) {
            this.timeValue = newVal;
        },
    },
    //方法集合
    methods: {
        setupValue(value) {
            extractDate(value);

            // if (!isDate(value)) return "";
            // // 提取日期格式
            // const dateFormat = extractFormat(value);
            // console.log("=======================================");
            // const dateObject = parseDate(value, "yyyy");
            // if (!isDateObject(dateObject)) return "";
        },
        setupPickerOptions(attrs, keysList) {
            const pickerOptions = {};

            keysList.forEach((key) => {
                pickerOptions[key] = has(attrs, key)
                    ? attrs[key]
                    : DefPickerOptions[key];
            });

            return {
                ...attrs,
                "picker-options": pickerOptions,
            };
        },
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
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        const date = new Date();
        const a = isDateObject(date);
        const b = isDate("2021-01-20");
        const c = toDate("2021-01-20");
        const d = formatDate(c, "yyyy-MM-dd HH:mm:ss");
        const e = parseDate(d, "yyyy-MM-dd HH:mm:ss");
        const f = getDayCountOfMonth(2021, 0);
        const h = getDayCountOfYear("2021");
        const i = prevDate(c, 10);
        const j = nextDate(c, 10);
        // console.log(`isDateObject：${a}`);
        // console.log(`isDate：${b}`);
        // console.log(`toDate：${c}`);
        // console.log(`formatDate：${d}`);
        // console.log(`parseDate：${e}`);
        // console.log(f);
        // console.log(h);
        // console.log(i);
        // console.log(j);

        this.setupValue(this.value);
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {},
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped></style>
