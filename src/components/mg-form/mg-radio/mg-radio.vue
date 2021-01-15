<!--
 * @Author: maggot-code
 * @Date: 2021-01-14 13:34:48
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-15 16:44:13
 * @Description: component mg-from -> mg-radio VUE
-->
<template>
    <el-radio-group
        class="mg-radio"
        v-model="radioValue"
        v-bind="options"
        @change="change"
    >
        <template v-if="options.mold === 'button'">
            <el-radio-button
                v-for="cell in options.enums"
                :key="cell.rid"
                :label="cell.value"
                :disabled="cell.disabled"
                >{{ cell.label }}</el-radio-button
            >
        </template>

        <template v-else-if="options.mold === 'radio'">
            <el-radio
                v-for="cell in options.enums"
                :key="cell.rid"
                :label="cell.value"
                :disabled="cell.disabled"
                :border="options.border"
                >{{ cell.label }}</el-radio
            >
        </template>

        <template v-else>
            <el-radio
                v-for="cell in options.enums"
                :key="cell.rid"
                :label="cell.value"
                :disabled="cell.disabled"
                :border="options.border"
                >{{ cell.label }}</el-radio
            >
        </template>
    </el-radio-group>
</template>

<script>
import { assign } from "lodash";
import defaultOptions from "./options";
import MgFormMixins from "@/components/mg-form/mixins/mg-form-mixins";
import MgRadioMixins from "@/components/mg-form/mixins/mg-radio-mixins";
import { checkEnum } from "@/components/mg-form/utils";
export default {
    name: "mg-radio",
    mixins: [MgFormMixins, MgRadioMixins],
    components: {},
    props: {},
    data() {
        //这里存放数据
        return {};
    },
    //监听属性 类似于data概念
    computed: {
        options: (vm) => {
            const { mold, enumList } = vm.$attrs;

            const enums = vm.checkIsEnums(enumList) ? checkEnum(enumList) : [];
            const defOptions = defaultOptions[mold] || defaultOptions.default;
            const protoAttrs = assign(
                { enums: enums },
                defOptions,
                vm.$props,
                vm.$attrs
            );

            return vm.delCommonProps(protoAttrs);
        },
    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {},
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
