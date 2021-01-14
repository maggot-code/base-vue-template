<!--
 * @Author: maggot-code
 * @Date: 2021-01-14 15:13:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-14 15:24:21
 * @Description: component mg-from -> mg-slider VUE
-->
<template>
    <el-slider
        class="mg-slider"
        v-model="sliderValue"
        @input="input"
    ></el-slider>
</template>

<script>
import defaultOptions from "./options";
import MgFormMixins from "@/components/mg-form/mixins/mg-form-mixins";
export default {
    name: "mg-slider",
    mixins: [MgFormMixins],
    components: {},
    props: {
        field: {
            type: String,
            default: () => "defualt",
        },
        value: {
            type: [Number, String],
            default: () => 0,
        },
        tag: {
            type: String,
            default: () => "",
        },
    },
    data() {
        //这里存放数据
        return {
            sliderValue: this.value,
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        keepValue(value) {
            this.$emit("keepValue", {
                tag: this.tag,
                field: this.field,
                value: value,
            });
        },
        input(value) {
            this.$emit("update:value", value);
            this.keepValue(value);
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
