<!--
 * @Author: maggot-code
 * @Date: 2021-01-08 17:54:47
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-08 18:18:42
 * @Description: component mg-form -> mg-radio.vue
-->
<template>
    <el-radio-group class="mg-radio" v-model="radio" size="mini">
        <template v-if="mold === 'radio'">
            <el-radio :label="0">默认选项</el-radio>
        </template>

        <template v-else-if="mold === 'button'">
            <el-radio-button :label="0">按钮选项</el-radio-button>
        </template>

        <template v-else>
            <el-radio :label="0">默认选项</el-radio>
        </template>
    </el-radio-group>
</template>

<script>
export default {
    name: "mg-radio",
    mixins: [],
    components: {},
    props: {
        mold: {
            type: String,
            default: () => "radio",
        },
    },
    data() {
        //这里存放数据
        return {
            radio: 0,
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
<style lang='scss' scoped></style>
