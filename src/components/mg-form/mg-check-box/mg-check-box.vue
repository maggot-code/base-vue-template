<!--
 * @Author: maggot-code
 * @Date: 2021-01-14 14:23:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-26 13:50:26
 * @Description: component mg-from -> mg-check-box VUE
-->
<template>
    <div class="mg-check-box">
        <el-checkbox
            v-if="selectAll"
            v-model="checkAll"
            :indeterminate="isIndeterminate"
            @change="handleCheckAllChange"
            >全选</el-checkbox
        >

        <el-checkbox-group
            v-model="radioValue"
            v-bind="options"
            @change="change"
        >
            <template v-if="mold === 'button'">
                <el-checkbox-button
                    v-for="cell in checkIsEnums(options.enums)"
                    :key="cell.eid"
                    :label="cell.value"
                    :disabled="cell.disabled"
                    >{{ cell.label }}</el-checkbox-button
                >
            </template>

            <template v-else-if="mold === 'radio'">
                <el-checkbox
                    v-for="cell in checkIsEnums(options.enums)"
                    :key="cell.eid"
                    :label="cell.value"
                    :disabled="cell.disabled"
                    :border="options.border"
                    >{{ cell.label }}</el-checkbox
                >
            </template>

            <template v-else>
                <el-checkbox
                    v-for="cell in checkIsEnums(options.enums)"
                    :key="cell.eid"
                    :label="cell.value"
                    :disabled="cell.disabled"
                    :border="options.border"
                    >{{ cell.label }}</el-checkbox
                >
            </template>
        </el-checkbox-group>
    </div>
</template>

<script>
import { isNil } from "lodash";
import DefaultAttrs from "./default";
import MgFormMixins from "@/components/mg-form/mixins/mg-form-mixins";
import MgRadioMixins from "@/components/mg-form/mixins/mg-radio-mixins";

export default {
    name: "mg-check-box",
    mixins: [MgFormMixins, MgRadioMixins],
    components: {},
    props: {
        value: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        //这里存放数据
        return {
            checkAll: false,
            isIndeterminate: false,
        };
    },
    //监听属性 类似于data概念
    computed: {
        selectAll: (vm) => {
            const { indeterminate } = vm.$attrs.uiSchema;

            return isNil(indeterminate) ? false : indeterminate;
        },
        options: (vm) => {
            const { mold } = vm.$props;
            const vBind = vm.mergeSchema(
                DefaultAttrs[mold],
                vm.$props,
                vm.delOtherSchema(vm.$attrs.uiSchema, ["indeterminate"]),
                vm.delOtherSchema(vm.$attrs.dataSchema)
            );

            return vBind;
        },
    },
    //监控data中的数据变化
    watch: {
        value: {
            handler(newVal) {
                this.radioValue = newVal;
                this.change(newVal);
            },
            immediate: true,
        },
    },
    //方法集合
    methods: {
        handleCheckAllChange(value) {
            const copyEnums = this.options.enums.map((item) => item.value);

            this.radioValue = value ? copyEnums : [];
            this.change(this.radioValue);
        },
        change(value) {
            const checkedCount = value.length;
            const checkAll = checkedCount === this.options.enums.length;
            const isIndeterminate =
                checkedCount > 0 && checkedCount < this.options.enums.length;

            this.checkAll = checkAll;
            this.isIndeterminate = isIndeterminate;
            this.keepValue(value, "change");
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
