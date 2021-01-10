<!--
 * @Author: maggot-code
 * @Date: 2021-01-10 22:23:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-10 22:37:42
 * @Description: component mg-form -> mg-textarea.vue
-->
<template>
    <el-input
        class="mg-input mg-textarea"
        v-model="inputValue"
        clearable
        show-word-limit
        type="textarea"
        rows="3"
        maxlength="30"
        minlength="0"
        :disabled="disabled"
        :placeholder="placeholder"
        :autosize="autosize"
        @blur="blur"
        @focus="focus"
        @change="change"
        @input="input"
        @clear="clear"
    ></el-input>
</template>

<script>
import mgFormMixins from "../mg-form-mixins";
import mgInputMixins from "../mg-input-mixins";
import { propsCheck } from "@/utils/tool";
export default {
    name: "mg-textarea",
    mixins: [mgFormMixins, mgInputMixins],
    components: {},
    props: {},
    data() {
        //这里存放数据
        return {
            autosize: { minRows: 3, maxRows: 5 },
        };
    },
    //监听属性 类似于data概念
    computed: {},
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
<style lang='scss' scoped>
@import "~@/assets/style/mg-input.scss";
</style>