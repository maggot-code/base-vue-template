/*
 * @Author: maggot-code
 * @Date: 2021-01-04 17:54:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-04 17:57:31
 * @Description: file content
 */
import Vue from 'vue';
import Vuex from 'vuex';
import modules from '@/store/modules';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: { ...modules }
})