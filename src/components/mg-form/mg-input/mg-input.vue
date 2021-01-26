<!--
 * @Author: maggot-code
 * @Date: 2021-01-13 16:49:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-26 10:05:34
 * @Description: component mg-from -> mg-input VUE
-->
<template>
    <el-input
        class="mg-input"
        v-model="inputValue"
        v-bind="options"
        @input="input"
    ></el-input>
</template>

<script>
import DefaultAttrs from "./default";
import MgFormMixins from "@/components/mg-form/mixins/mg-form-mixins";

export default {
    name: "mg-input",
    mixins: [MgFormMixins],
    components: {},
    props: {
        value: {
            type: [String, Number],
            default: () => "",
        },
    },
    data() {
        //这里存放数据
        return {
            inputValue: this.value,
        };
    },
    //监听属性 类似于data概念
    computed: {
        options: (vm) => {
            const { mold } = vm.$props;
            const vBind = vm.mergeSchema(
                DefaultAttrs[mold],
                vm.$props,
                vm.delOtherSchema(vm.$attrs.uiSchema, ["type"])
            );

            return vBind;
        },
    },
    //监控data中的数据变化
    watch: {
        value(newVal) {
            this.inputValue = newVal;
        },
    },
    //方法集合
    methods: {
        input(value) {
            this.keepValue(value, "input");
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
