<!--
 * @Author: maggot-code
 * @Date: 2021-01-22 13:08:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-26 18:18:22
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
            <template v-for="cell in formSchema">
                <el-form-item
                    v-if="checkIsComponent(cell[1].componentName)"
                    :key="cell[0]"
                    v-bind="setFormItem(field, cell.uiSchema)"
                >
                    <component
                        :is="cell[1].componentName"
                        :field="cell[0]"
                        :value.sync="formData[cell[0]]"
                        v-bind="setupAttrs(cell[1])"
                        @keepValue="keepValue"
                    ></component>
                </el-form-item>
            </template>
        </template>

        <template v-else>
            <el-row :gutter="20">
                <template v-for="cell in formSchema">
                    <el-col
                        v-if="checkIsComponent(cell[1].componentName)"
                        :key="cell[0]"
                        :span="setColSpan(cell[1].uiSchema)"
                    >
                        <el-form-item
                            v-bind="setFormItem(cell[0], cell[1].uiSchema)"
                        >
                            <component
                                :is="cell[1].componentName"
                                :field="cell[0]"
                                :value.sync="formData[cell[0]]"
                                v-bind="setupAttrs(cell[1])"
                                @keepValue="keepValue"
                            ></component>
                        </el-form-item>
                    </el-col>
                </template>
            </el-row>
        </template>

        <el-form-item>
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
import { cloneDeep } from "lodash";
import { flake } from "@/utils/tool";
import { setupFormSchema, getWorker } from "./utils";
import { FormCellComponent } from "./install";

import tagProcessFunc from "@/center/tag-process";

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
            type: [Array, Object],
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
    },
    data() {
        //这里存放数据
        return {
            // medium / small / mini
            formSize: "medium",
            formSchema: {},
            formData: {},
        };
    },
    //监听属性 类似于data概念
    computed: {
        formRules: (vm) => {
            return {};
        },
        componentsList: () =>
            Object.keys(FormCellComponent).map(
                (keys) => FormCellComponent[keys].name
            ),
    },
    //监控data中的数据变化
    watch: {
        schema: {
            handler(newVal) {
                const copySchema = setupFormSchema(cloneDeep(newVal));
                this.formSchema = copySchema;
                this.setupFormData(copySchema);
            },
            immediate: true,
            deep: true,
        },
    },
    //方法集合
    methods: {
        /**
         * @description: 数据操作器
         * @param {Object} formHandler
         */
        keepValue(formHandler) {
            const { value } = formHandler;
            const { leaderTag } = formHandler.tag;
            leaderTag.forEach((tagName) => {
                getWorker(this.formSchema, tagName).forEach((workerMan) =>
                    this.processHandler(tagName, value, workerMan)
                );
            });
        },
        /**
         * @description: 提交表单
         * @param {String} ref 组件实例对象名称
         */
        submitForm(ref) {
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
        /**
         * @description: 重置表单
         * @param {String} ref 组件实例对象名称
         */
        resetForm(ref) {
            // this.formData = cloneDeep(this.copyFormData);
            console.log(this.formData);
            this.$refs[ref].clearValidate();
        },
        /**
         * @description: 流程操作
         * @param {String} tagName
         * @param {*} value
         * @param {Object} workerMan
         */
        processHandler(tagName, value, workerMan) {
            const { controller, func } = tagProcessFunc[tagName];
            const { field } = workerMan;
            const setInfo = { field, value: func(value) };
            const setupFunc = this.issueContrroller(controller);

            func && setupFunc && setupFunc(setInfo);
        },
        /**
         * @description: 控制下发
         * @param {String} controller
         * @return {Function} 操作控制器
         */
        issueContrroller(controller) {
            return {
                value: this.setupValue,
                schema: this.setupSchema,
            }[controller];
        },
        /**
         * @description: 数据操作控制器
         * @param {String} field
         * @param {*} value
         */
        setupValue({ field, value }) {
            this.$set(this.formData, field, value);
        },
        /**
         * @description: 结构操作控制器
         * @param {String} field
         * @param {*} value
         */
        setupSchema({ field, value }) {
            for (const key in this.formSchema) {
                if (this.formSchema[key].field === field) {
                    this.$set(this.formSchema, field, value);

                    const defVal = value.value
                        ? value.value
                        : this.formSchema[field].value;

                    this.$set(this.formData, field, defVal);
                }
            }
        },
        /**
         * @description: 设置表单数据
         * @param {Object} schema
         */
        setupFormData(schema) {
            for (const iterator of schema) {
                const [field, cell] = iterator;
                this.$set(this.formData, field, cell.value);
            }
        },
        /**
         * @description: 设置组件属性
         * @param {Object} cellSchema 结构
         * @return {*} component props
         */
        setupAttrs(cellSchema) {
            const {
                field,
                mold,
                dataSchema,
                uiSchema,
                eventSchema,
                leaderTag,
                workerTag,
            } = cellSchema;

            return {
                field: field,
                mold: mold,
                tag: {
                    leaderTag: leaderTag,
                    workerTag: workerTag,
                },
                dataSchema,
                uiSchema,
                eventSchema,
            };
        },
        /**
         * @description: 设置col间距属性
         * @param {Number,String} col
         * @return {Number,String} 返回存在的值或者默认值24
         */
        setColSpan(uiSchema) {
            const { col } = uiSchema;
            return col || 24;
        },
        /**
         * @description: 设置表单项属性
         * @param {String} field 表单项对应数据字段
         * @param {Object} uiSchema UI结构
         * @return {Object} el-form-item props
         */
        setFormItem(field, uiSchema) {
            const { label } = uiSchema;
            return {
                label: label || "表单项",
                prop: field,
            };
        },
        /**
         * @description: 检查组件是否被正确注册了
         * @param {String} componentName 组件名称
         * @return {Boolean} 是否被注册
         */
        checkIsComponent(componentName) {
            return this.componentsList.indexOf(componentName) >= 0;
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