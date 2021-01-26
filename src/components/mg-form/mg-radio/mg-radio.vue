<!--
 * @Author: maggot-code
 * @Date: 2021-01-14 13:34:48
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-26 10:47:48
 * @Description: component mg-from -> mg-radio VUE
-->
<template>
    <el-radio-group
        class="mg-radio"
        v-model="radioValue"
        v-bind="options"
        @change="change"
    >
        <template v-if="mold === 'button'">
            <el-radio-button
                v-for="cell in checkIsEnums(options.enums)"
                :key="cell.eid"
                :label="cell.value"
                :disabled="cell.disabled"
                >{{ cell.label }}</el-radio-button
            >
        </template>

        <template v-else-if="mold === 'radio'">
            <el-radio
                v-for="cell in checkIsEnums(options.enums)"
                :key="cell.eid"
                :label="cell.value"
                :disabled="cell.disabled"
                :border="options.border"
                >{{ cell.label }}</el-radio
            >
        </template>

        <template v-else>
            <el-radio
                v-for="cell in checkIsEnums(options.enums)"
                :key="cell.eid"
                :label="cell.value"
                :disabled="cell.disabled"
                :border="options.border"
                >{{ cell.label }}</el-radio
            >
        </template>
    </el-radio-group>
</template>

<script>
import DefaultAttrs from "./default";
import MgFormMixins from "@/components/mg-form/mixins/mg-form-mixins";
import MgRadioMixins from "@/components/mg-form/mixins/mg-radio-mixins";

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
