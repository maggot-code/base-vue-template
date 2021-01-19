<!--
 * @Author: maggot-code
 * @Date: 2021-01-14 15:44:10
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-19 14:25:42
 * @Description: component mg-from -> mg-cascader VUE
-->
<template>
    <el-cascader
        class="mg-cascader"
        v-model="cascaderValue"
        v-bind="options"
        @change="change"
    >
        <!-- <template slot-scope="{ node, data }">
            <span>{{ data.label }}</span>
            <span v-if="!node.isLeaf && data.children">
                ({{ data.children.length }})
            </span>
        </template> -->
    </el-cascader>
</template>

<script>
import { cloneDeep, assign, isArray, isNil } from "lodash";
import defaultOptions from "./options";
import MgFormMixins from "@/components/mg-form/mixins/mg-form-mixins";
import { resetTrees } from "@/components/mg-form/utils";

const BaseProps = {
    expandTrigger: "hover",
    multiple: false,
    checkStrictly: false,
    lazy: false,
};

export default {
    name: "mg-cascader",
    mixins: [MgFormMixins],
    components: {},
    props: {
        value: {
            type: [String, Number, Array],
            default: () => "",
        },

        props: Object,
    },
    data() {
        //这里存放数据
        return {
            cascaderValue: this.value,
        };
    },
    //监听属性 类似于data概念
    computed: {
        options: (vm) => {
            const { mold, enumList } = vm.$attrs;
            const factor =
                !isNil(vm.$props.props) &&
                Object.keys(vm.$props.props).length > 0;
            const cascaderProps = factor
                ? assign({}, BaseProps, vm.$props.props)
                : BaseProps;
            const { lazy } = cascaderProps;

            const enums = vm.checkIsEnums(enumList)
                ? resetTrees(cloneDeep(enumList), lazy)
                : [];
            const defOptions = defaultOptions[mold] || defaultOptions.default;
            const protoAttrs = assign(
                { options: enums },
                defOptions,
                vm.$props,
                vm.$attrs
            );
            protoAttrs.props = cascaderProps;

            if (lazy) {
                protoAttrs.props.expandTrigger = "click";
                protoAttrs.props.lazyLoad = vm.lazyLoadBack;
            }

            return vm.delCommonProps(protoAttrs, ["enumList"]);
        },
    },
    //监控data中的数据变化
    watch: {
        value(newVal) {
            this.cascaderValue = newVal;
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
        lazyLoadBack(node, resolve) {
            setTimeout(() => {
                console.log(node);
                resolve();
            }, 1000);
        },
        checkIsEnums(tree) {
            return isArray(tree) && tree.length > 0;
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
