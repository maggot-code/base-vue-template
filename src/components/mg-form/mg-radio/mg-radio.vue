<!--
 * @Author: maggot-code
 * @Date: 2021-01-08 17:54:47
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-10 23:43:55
 * @Description: component mg-form -> mg-radio.vue
-->
<template>
    <el-radio-group
        class="mg-radio"
        v-model="radio"
        size="mini"
        @change="radioChange"
    >
        <template v-if="mold === 'radio'">
            <el-radio
                v-for="cell in radioEnum"
                :key="cell.value"
                :disabled="disabled"
                :label="cell.value"
                >{{ cell.label }}</el-radio
            >
        </template>

        <template v-else-if="mold === 'button'">
            <el-radio-button
                v-for="cell in radioEnum"
                :key="cell.value"
                :disabled="disabled"
                :label="cell.value"
                >{{ cell.label }}</el-radio-button
            >
        </template>

        <template v-else>
            <el-radio
                v-for="cell in radioEnum"
                :key="cell.value"
                :disabled="disabled"
                :label="cell.value"
                >{{ cell.label }}</el-radio
            >
        </template>
    </el-radio-group>
</template>

<script>
import mgFormMixins from "../mg-form-mixins";
import { propsCheck } from "@/utils/tool";
export default {
    name: "mg-radio",
    mixins: [mgFormMixins],
    components: {},
    props: {
        field: String,
        mold: {
            type: String,
            default: () => "radio",
            validator: (value) =>
                propsCheck(
                    ["radio", "button"].indexOf(value) !== -1,
                    'mg-radio props mold need ["radio", "button"]'
                ),
        },
        disabled: {
            type: Boolean,
            default: () => false,
        },
        radioDefault: {
            type: String,
            default: () => "",
        },
        radioEnum: {
            type: Array,
            default: () => [
                {
                    value: "bf7ef2feb79a422dbe96a3ffb877eebe",
                    label: "GoLang",
                },
                {
                    value: "0be59f964fa544e795d53b27fe30e4c4",
                    label: "JavaScript",
                },
                {
                    value: "9bba1df431f64637a0b13ad882968d43",
                    label: "PHP",
                },
            ],
        },
    },
    data() {
        //这里存放数据
        return {
            radio: this.radioDefault,
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        radioChange(value) {
            const target = this.radioEnum.filter(
                (item) => item.value === value
            );

            if (target.length <= 0) {
                return false;
            }

            this.$emit("onChange", {
                field: this.field || "default",
                ...target[0],
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
<style lang='scss' scoped>
.mg-radio {
    & > label {
        margin: 5px 0;
    }
    & > label.el-radio {
        margin: 5px 10px;
    }
}
</style>
