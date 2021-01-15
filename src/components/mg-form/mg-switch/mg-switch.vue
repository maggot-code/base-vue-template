<!--
 * @Author: maggot-code
 * @Date: 2021-01-14 14:44:28
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-15 10:10:57
 * @Description: component mg-from -> mg-switch VUE
-->
<template>
    <el-switch
        class="mg-switch"
        v-model="switchValue"
        v-bind="options"
        @change="change"
    >
    </el-switch>
</template>

<script>
import { assign } from "lodash";
import defaultOptions from "./options";
import MgFormMixins from "@/components/mg-form/mixins/mg-form-mixins";
export default {
    name: "mg-switch",
    mixins: [MgFormMixins],
    components: {},
    props: {
        value: {
            type: [Boolean, String, Number],
            default: () => false,
        },
    },
    data() {
        //这里存放数据
        return {
            switchValue: this.value,
        };
    },
    //监听属性 类似于data概念
    computed: {
        options: (vm) => {
            const { mold } = vm.$attrs;

            const defOptions = defaultOptions[mold] || defaultOptions.default;
            const protoAttrs = assign({}, defOptions, vm.$props, vm.$attrs);

            return vm.delCommonProps(protoAttrs);
        },
    },
    //监控data中的数据变化
    watch: {
        value(newVal) {
            this.switchValue = newVal;
        },
    },
    //方法集合
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
