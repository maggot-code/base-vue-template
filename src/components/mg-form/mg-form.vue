<!--
 * @Author: maggot-code
 * @Date: 2021-01-13 16:42:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-15 09:55:26
 * @Description: component mg-form VUE
-->
<template>
    <el-form
        class="mg-form"
        label-position="right"
        label-suffix="："
        :ref="formRef"
        :size="formSize"
        :inline="inline"
        :disabled="disabled"
        :label-width="labelWidth"
        :model="formData"
        :rules="formRules"
        :status-icon="false"
    >
        <template v-if="inline">
            <template v-for="(cell, field) in schema">
                <el-form-item
                    v-if="checkIsComponent(cell.componentName)"
                    :key="field"
                    :label="cell.label"
                    :prop="field"
                >
                    <component
                        v-bind="setupAttrs(cell)"
                        :is="cell.componentName"
                        :field="field"
                        :value.sync="formData[field]"
                        :tag="cell.tag"
                        @keepValue="keepValue"
                    ></component>
                </el-form-item>
            </template>
        </template>

        <template v-else>
            <el-row :gutter="20">
                <template v-for="(cell, field) in schema">
                    <el-col
                        v-if="checkIsComponent(cell.componentName)"
                        :key="field"
                        :span="setColSpan(cell.col)"
                    >
                        <el-form-item :label="cell.label" :prop="field">
                            <component
                                v-bind="setupAttrs(cell)"
                                :field="field"
                                :value.sync="formData[field]"
                                :tag="cell.tag"
                                :is="cell.componentName"
                                @keepValue="keepValue"
                            ></component>
                        </el-form-item>
                    </el-col>
                </template>
            </el-row>
        </template>

        <el-form-item v-if="isButton">
            <el-button
                v-if="submitButton"
                type="primary"
                @click="submitForm(formRef)"
                >立即创建</el-button
            >
            <el-button v-if="resetButton" @click="resetForm(formRef)"
                >重置</el-button
            >
        </el-form-item>
    </el-form>
</template>

<script>
import { cloneDeep, compact, isUndefined } from "lodash";
import { flake } from "@/utils/tool";
import { FormCellComponent } from "./install";
import * as FormValidator from "./validator";
export default {
    name: "mg-form",
    mixins: [],
    components: { ...FormCellComponent },
    props: {
        formRef: {
            type: [String, Number],
            default: () => flake.gen(),
        },
        schema: {
            type: Object,
            required: true,
        },
        inline: {
            type: Boolean,
            default: () => false,
        },
        disabled: {
            type: Boolean,
            default: () => false,
        },
        labelWidth: {
            type: String,
            default: () => "120px",
        },
        submitButton: {
            type: Boolean,
            default: () => true,
        },
        resetButton: {
            type: Boolean,
            default: () => true,
        },
        handlerSubmit: Function,
        handlerReset: Function,
    },
    data() {
        //这里存放数据
        return {
            componentsList: [],
            // medium / small / mini
            formSize: "medium",
            formData: {},
            formRules: {},
            copyFormData: {},
        };
    },
    //监听属性 类似于data概念
    computed: {
        isButton: (vm) => Object.keys(vm.schema).length > 0,
    },
    //监控data中的数据变化
    watch: {
        schema: {
            handler(schema) {
                for (const keys in schema) {
                    this.$set(this.formData, keys, schema[keys].value);
                    if (schema[keys].rules) {
                        this.$set(
                            this.formRules,
                            keys,
                            this.filterRules(schema[keys].rules)
                        );
                    }
                }

                this.copyFormData = cloneDeep(this.formData);
            },
            immediate: true,
            deep: true,
        },
    },
    //方法集合
    methods: {
        keepValue(targeter) {
            const { tag, field, value } = targeter;
        },
        submitForm(ref) {
            if (!isUndefined(this.handlerSubmit)) {
                this.handlerSubmit(ref);
                return false;
            }

            this.$refs[ref]
                .validate()
                .then((success) => {
                    console.log(success);
                    console.log(this.formData);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        resetForm(ref) {
            if (!isUndefined(this.handlerReset)) {
                this.handlerReset(ref);
                return false;
            }

            this.formData = cloneDeep(this.copyFormData);
            this.$refs[ref].clearValidate();
        },
        filterRules(rules) {
            return rules.map((item) => {
                if (item.validator && FormValidator[item.validator]) {
                    item.validator = FormValidator[item.validator];
                }
                return item;
            });
        },
        checkIsComponent(componentName) {
            return this.componentsList.indexOf(componentName) >= 0;
        },
        setupAttrs(cell) {
            const { mold, attrs } = cell;

            return {
                mold: mold,
                ...(attrs || {}),
            };
        },
        setColSpan(col) {
            return col || 24;
        },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.componentsList = Object.keys(FormCellComponent).map(
            (keys) => FormCellComponent[keys].name
        );
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {},
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {
        this.formData = this.formRules = this.copyFormData = {};
    }, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped></style>