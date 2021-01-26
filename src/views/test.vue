<!--
 * @Author: maggot-code
 * @Date: 2021-01-07 22:31:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-26 17:49:40
 * @Description: test.vue
-->
<template>
    <div class="mg-test" ref="testEl">
        <mg-form :schema="formSchema"></mg-form>
    </div>
</template>

<script>
import schemaJSON from "@/components/mg-form/test/test-schema-v1.json";

import MgForm from "@/components/mg-form";
export default {
    name: "mg-test",
    components: {
        MgForm,
    },
    data() {
        //这里存放数据
        return {
            // formSchema: {},
            formSchema: schemaJSON,
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {},
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        // this.formSchema = setupFormSchema(schemaJSON);
    },
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
.mg-test {
    width: 80%;
    margin: 50px auto 0;
}
</style>