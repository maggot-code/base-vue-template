<!--
 * @Author: maggot-code
 * @Date: 2021-01-07 22:31:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-11 17:55:23
 * @Description: test.vue
-->
<template>
    <div class="mg-test" ref="testEl">
        <!-- <mg-radio @onChange="testChenage"></mg-radio>
        <mg-input @onChange="testChenage"></mg-input>
        <mg-password @onChange="testChenage"></mg-password>
        <mg-textarea @onChange="testChenage"></mg-textarea> -->
        <mg-form :form-schema="formProps"></mg-form>
    </div>
</template>

<script>
import {
    MgForm,
    MgRadio,
    MgInput,
    MgPassword,
    MgTextarea,
} from "@/components/mg-form";
export default {
    name: "mg-test",
    components: { MgForm },
    data() {
        //这里存放数据
        return {
            formProps: {
                sex: {
                    componentName: "mg-radio",
                    label: "性别",
                    attrs: {
                        mold: "radio",
                        radioDefault: "0",
                        radioEnum: [
                            {
                                value: "0",
                                label: "女",
                            },
                            {
                                value: "1",
                                label: "男",
                            },
                        ],
                    },
                },
                name: {
                    componentName: "mg-input",
                    label: "姓名",
                    attrs: {
                        value: "111",
                    },
                },
                password: {
                    componentName: "mg-password",
                    label: "密码",
                    attrs: {
                        value: "222",
                    },
                },
                brief: {
                    componentName: "mg-textarea",
                    label: "简介",
                    attrs: {
                        value: "333",
                    },
                },
            },
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        submit() {},
        testChenage(val) {
            console.log(val);
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
.mg-test {
    width: 80%;
    margin: 0 auto;
}
</style>