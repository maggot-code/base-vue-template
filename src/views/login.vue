<!--
 * @Author: maggot-code
 * @Date: 2021-01-04 21:59:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-08 13:27:32
 * @Description: login.vue
-->
<template>
    <div class="mg-login">
        mg-login
        <el-button type="danger" @click="closeLink">断开连接</el-button>
        <el-button type="danger" @click="login">登录</el-button>
    </div>
</template>

<script>
import store from "@/store";
import { SendAll } from "@/utils/axios/httpRequest";
import { ping, getHost } from "@/api/construction";
import { setToken } from "@/utils/cache/cookie";
export default {
    name: "mg-login",
    components: {},
    data() {
        //这里存放数据
        return {
            successJump: {
                name: this.$route.query.redirect || "root",
            },
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        closeLink() {
            console.log(11);
        },
        login() {
            setToken("f9d8c82c3f4844fa81b9db5c1284b7a0");
            this.$router.push({ ...this.successJump });
        },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        ping().then((res) => {
            console.log(res);
        });
        // getHost().then((res) => {
        //     console.log(res);
        // });
        // SendAll([ping(), getHost()]).then((res) => {
        //     console.log(res);
        // });
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
@import "~@/assets/style/login.scss";
</style>
