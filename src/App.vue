<!--
 * @Author: maggot-code
 * @Date: 2021-01-04 14:24:39
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-04 22:38:57
 * @Description: application.vue
-->
<template>
    <div id="app">
        <transition>
            <router-view />
        </transition>
    </div>
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
:root {
    --green: #52c41a;
}
</style>