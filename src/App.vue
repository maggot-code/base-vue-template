<!--
 * @Author: maggot-code
 * @Date: 2021-01-04 14:24:39
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-08 16:40:10
 * @Description: application.vue
-->
<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
export default {
    name: "App",
};
</script>
<style lang="scss">
html,
body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #fff;
    overflow: hidden;
    border: hidden;
}
#app {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    color: #2c3e50;
    background-color: #fff;
    overflow-x: hidden;
    overflow-y: auto;
    border: hidden;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
@import "~@/assets/style/extend-element.scss";
:root {
    --green: #52c41a;
}
</style>