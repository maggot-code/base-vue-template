<!--
 * @Author: maggot-code
 * @Date: 2021-01-13 16:42:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-14 15:51:56
 * @Description: component mg-form VUE
-->
<template>
    <el-form
        class="mg-form"
        label-width="80px"
        ref="formData"
        :status-icon="true"
        :inline="inline"
        :model="formData"
        :rules="formRules"
    >
        <template v-if="inline">
            <el-form-item
                v-for="(cell, field) in schema"
                :key="field"
                :label="cell.label"
                :prop="field"
            >
                <component
                    v-bind="{ mold: cell.mold, ...cell.attrs }"
                    :is="cell.componentName"
                    :field="field"
                    :value.sync="formData[field]"
                    :tag="cell.tag"
                    @keepValue="keepValue"
                ></component>
            </el-form-item>
        </template>

        <template v-else>
            <el-row :gutter="20">
                <el-col
                    v-for="(cell, field) in schema"
                    :key="field"
                    :span="cell.col || 24"
                >
                    <el-form-item :label="cell.label" :prop="field">
                        <component
                            v-bind="{ mold: cell.mold, ...cell.attrs }"
                            :is="cell.componentName"
                            :field="field"
                            :value.sync="formData[field]"
                            :tag="cell.tag"
                            @keepValue="keepValue"
                        ></component>
                    </el-form-item>
                </el-col>
            </el-row>
        </template>

        <el-form-item>
            <el-button type="primary" @click="submitForm('formData')"
                >立即创建</el-button
            >
            <el-button>重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { FormCellComponent } from "./install";
import { compact } from "lodash";
import * as FormValidator from "./validator";
export default {
    name: "mg-form",
    mixins: [],
    components: { ...FormCellComponent },
    props: {
        schema: {
            type: Object,
            required: true,
        },
        inline: {
            type: Boolean,
            default: () => false,
        },
    },
    data() {
        //这里存放数据
        return {
            formLoad: false,
            formData: {},
            formRules: {},
        };
    },
    //监听属性 类似于data概念
    computed: {},
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
                this.formLoad = true;
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
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log("submit!!");
                    console.log(this[formName]);
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        filterRules(rules) {
            return rules.map((item) => {
                if (item.validator && FormValidator[item.validator]) {
                    item.validator = FormValidator[item.validator];
                }
                return item;
            });
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