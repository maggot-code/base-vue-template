<!--
 * @Author: maggot-code
 * @Date: 2021-01-14 15:32:51
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-26 10:33:36
 * @Description: component mg-from -> mg-select VUE
-->
<template>
    <el-select
        class="mg-select"
        v-model="selectValue"
        v-bind="options"
        @change="change"
    >
        <template v-if="mold === 'group'">
            <el-option-group
                v-for="group in options.enums"
                :key="group.eid"
                :label="group.label"
                :disabled="group.disabled"
            >
                <el-option
                    v-for="item in group.options"
                    :key="item.eid"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled"
                ></el-option>
            </el-option-group>
        </template>

        <template v-else>
            <el-option
                v-for="item in options.enums"
                :key="item.eid"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
            ></el-option>
        </template>
    </el-select>
</template>

<script>
import DefaultAttrs from "./default";
import MgFormMixins from "@/components/mg-form/mixins/mg-form-mixins";

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
    },
    data() {
        //这里存放数据
        return {
            selectValue: this.value,
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
            this.selectValue = newVal;
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
