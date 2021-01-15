<!--
 * @Author: maggot-code
 * @Date: 2021-01-14 15:32:51
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-15 17:30:05
 * @Description: component mg-from -> mg-select VUE
-->
<template>
    <el-select
        class="mg-select"
        v-model="selectValue"
        v-bind="options"
        :multiple="setupMultiple"
        :collapse-tags="setupCollapseTags"
        @change="change"
    >
        <template v-if="options.mold === 'group'">
            <el-option-group
                v-for="group in options.enums"
                :key="group.rid"
                :label="group.label"
                :disabled="group.disabled"
            >
                <el-option
                    v-for="item in group.options"
                    :key="item.rid"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled"
                ></el-option>
            </el-option-group>
        </template>

        <template v-else>
            <el-option
                v-for="item in options.enums"
                :key="item.rid"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
            ></el-option>
        </template>
    </el-select>
</template>

<script>
import { has, assign, isArray } from "lodash";
import defaultOptions from "./options";
import MgFormMixins from "@/components/mg-form/mixins/mg-form-mixins";
import { checkEnumGroup, checkEnum } from "@/components/mg-form/utils";
export default {
    name: "mg-select",
    mixins: [MgFormMixins],
    components: {},
    props: {
        value: {
            type: [String, Number, Array],
            default: () => "",
        },

        multiple: {
            type: Boolean,
            default: () => false,
        },
        filterable: {
            type: Boolean,
            default: () => true,
        },
        clearable: {
            type: Boolean,
            default: () => true,
        },
        placeholder: {
            type: String,
            default: () => "请选择内容",
        },
    },
    data() {
        //这里存放数据
        return {
            selectValue: this.value,
        };
    },
    //监听属性 类似于data概念
    computed: {
        setupMultiple: (vm) =>
            isArray(vm.value) ? true : vm.multiple ? false : false,
        setupCollapseTags: (vm) => vm.setupMultiple,

        options: (vm) => {
            const { mold, enumList } = vm.$attrs;
            const enumCheckFunc = mold === "group" ? checkEnumGroup : checkEnum;

            const enums = vm.checkIsEnums(enumList)
                ? enumCheckFunc(enumList)
                : [];
            const defOptions = defaultOptions[mold] || defaultOptions.default;
            const protoAttrs = assign(
                { enums: enums },
                defOptions,
                vm.$props,
                vm.$attrs
            );

            return vm.delCommonProps(protoAttrs, [
                "enumList",
                "multiple",
                "collapse-tags",
            ]);
        },
    },
    //监控data中的数据变化
    watch: {
        value(newVal) {
            this.selectValue = newVal;
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
        checkIsEnums(list) {
            return isArray(list) && list.length > 0;
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
