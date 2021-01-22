<!--
 * @Author: maggot-code
 * @Date: 2021-01-21 17:56:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-22 11:13:54
 * @Description: component mg-from -> mg-date VUE
-->
<template>
    <el-date-picker
        class="mg-date"
        v-model="dateValue"
        v-bind="options"
        @change="change"
    >
    </el-date-picker>
</template>

<script>
import { assign, has, isArray } from "lodash";
import { changeDate } from "@/utils/date";
import defaultOptions from "./options";
import MgFormMixins from "@/components/mg-form/mixins/mg-form-mixins";

const limitOptions = {
    editable: false,
    clearable: true,
    "range-separator": "至",
};

export default {
    name: "mg-date",
    mixins: [MgFormMixins],
    components: {},
    props: {
        value: {
            type: [String, Array, Number, Date],
            default: () => "",
        },

        placeholder: {
            type: String,
            default: () => "请选择日期",
        },
        "start-placeholder": {
            type: String,
            default: () => "请选择开始日期",
        },
        "end-placeholder": {
            type: String,
            default: () => "请选择结束日期",
        },
    },
    data() {
        //这里存放数据
        return {
            dateValue: this.setupValue(this.value),
        };
    },
    //监听属性 类似于data概念
    computed: {
        options: (vm) => {
            const { mold } = vm.$attrs;

            if (vm.hasDefaultValue(mold)) {
                limitOptions["default-value"] = vm.dateValue;
            }

            const defOptions = defaultOptions[mold] || defaultOptions.default;
            const protoAttrs = assign(
                {},
                vm.$props,
                vm.$attrs,
                defOptions,
                limitOptions
            );

            return vm.delCommonProps(protoAttrs);
        },
    },
    //监控data中的数据变化
    watch: {
        value(newVal) {
            this.dateValue = this.setupValue(newVal);
        },
    },
    //方法集合
    methods: {
        setupValue(value) {
            if (!isArray(value)) return changeDate(value);

            return value.map((val) => changeDate(val));
        },
        hasDefaultValue(mold) {
            const moldRange = ["default", "date", "year", "month"];

            return mold in moldRange;
        },
        keepValue(value) {
            this.$emit("keepValue", {
                tag: this.tag,
                field: this.field,
                value: value,
            });
        },
        change(value) {
            const date = this.setupValue(value);
            this.$emit("update:value", date);
            this.keepValue(date);
        },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
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