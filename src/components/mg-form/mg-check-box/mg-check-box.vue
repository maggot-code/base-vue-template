<!--
 * @Author: maggot-code
 * @Date: 2021-01-14 14:23:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-14 14:40:09
 * @Description: component mg-from -> mg-check-box VUE
-->
<template>
    <el-checkbox-group
        class="mg-check-box"
        v-model="radioValue"
        v-bind="options"
        @change="change"
    >
        <template v-if="options.mold === 'radio'">
            <el-checkbox
                v-for="cell in options.enums"
                :key="cell.rid"
                :label="cell.value"
                :disabled="cell.disabled"
                >{{ cell.label }}</el-checkbox
            >
        </template>

        <template v-else-if="options.mold === 'button'">
            <el-checkbox-button
                v-for="cell in options.enums"
                :key="cell.rid"
                :label="cell.value"
                :disabled="cell.disabled"
                >{{ cell.label }}</el-checkbox-button
            >
        </template>

        <template v-else>
            <el-checkbox
                v-for="cell in options.enums"
                :key="cell.rid"
                :label="cell.value"
                :disabled="cell.disabled"
                >{{ cell.label }}</el-checkbox
            >
        </template>
    </el-checkbox-group>
</template>

<script>
import defaultOptions from "./options";
import MgFormMixins from "@/components/mg-form/mixins/mg-form-mixins";
import { checkEnum } from "@/components/mg-form/utils";
import { isArray } from "lodash";
export default {
    name: "mg-check-box",
    mixins: [MgFormMixins],
    components: {},
    props: {
        field: {
            type: String,
            default: () => "defualt",
        },
        value: {
            type: Array,
            default: () => [],
        },
        tag: {
            type: String,
            default: () => "",
        },
    },
    data() {
        //这里存放数据
        return {
            radioValue: this.value,
        };
    },
    //监听属性 类似于data概念
    computed: {
        options: (vm) => {
            const { mold, enumList } = vm.$attrs;
            const def = defaultOptions[mold] || defaultOptions.default;

            const enums =
                isArray(enumList) && enumList.length > 0
                    ? checkEnum(enumList)
                    : [];

            return Object.assign({}, def, {
                enums: enums,
                mold: mold || "radio",
                ...vm.$attrs,
            });
        },
    },
    //监控data中的数据变化
    watch: {},
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
