<!--
 * @Author: maggot-code
 * @Date: 2021-01-14 15:44:10
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-26 14:38:20
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
import DefaultAttrs from "./default";
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
            const { mold, props } = vm.$props;
            const { enums } = vm.$attrs.dataSchema;

            const factor = !isNil(props) && Object.keys(props).length > 0;
            const cascaderProps = factor
                ? assign({}, BaseProps, props)
                : BaseProps;
            const { lazy } = cascaderProps;
            const enumsList = vm.checkIsEnums(enums)
                ? resetTrees(cloneDeep(enums), lazy)
                : [];
            const vBind = vm.mergeSchema(
                { options: enumsList },
                DefaultAttrs[mold],
                vm.$props,
                vm.delOtherSchema(vm.$attrs.uiSchema),
                vm.delOtherSchema(vm.$attrs.dataSchema, ["enums"])
            );

            vBind.props = cascaderProps;
            if (lazy) {
                vBind.props.expandTrigger = "click";
                vBind.props.lazyLoad = vm.lazyLoadBack;
            }
            return vBind;
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
        change(value) {
            this.keepValue(value, "change");
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
