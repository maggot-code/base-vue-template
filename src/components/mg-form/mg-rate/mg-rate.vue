<!--
 * @Author: maggot-code
 * @Date: 2021-01-14 15:26:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-26 14:06:28
 * @Description: component mg-from -> mg-rate VUE
-->
<template>
    <el-rate
        class="mg-rate"
        v-model="rateValue"
        v-bind="options"
        @change="change"
    ></el-rate>
</template>

<script>
import DefaultAttrs from "./default";
import MgFormMixins from "@/components/mg-form/mixins/mg-form-mixins";
export default {
    name: "mg-rate",
    mixins: [MgFormMixins],
    components: {},
    props: {
        value: {
            type: Number,
            default: () => 0,
        },
    },
    data() {
        //这里存放数据
        return {
            rateValue: this.value,
        };
    },
    //监听属性 类似于data概念
    computed: {
        options: (vm) => {
            const { mold } = vm.$props;
            const vBind = vm.mergeSchema(
                DefaultAttrs[mold],
                vm.$props,
                vm.delOtherSchema(vm.$attrs.uiSchema),
                vm.delOtherSchema(vm.$attrs.dataSchema)
            );

            return vBind;
        },
    },
    //监控data中的数据变化
    watch: {
        value(newVal) {
            this.rateValue = newVal;
        },
    },
    //方法集合
    methods: {
        change(value) {
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
