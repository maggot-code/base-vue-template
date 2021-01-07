/*
 * @Author: maggot-code
 * @Date: 2021-01-04 17:54:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-06 09:24:02
 * @Description: store inlet
 */
import Vue from 'vue';
import Vuex from 'vuex';
import * as axiosStore from '@/store/axios';
import modules from '@/store/modules';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        ...axiosStore.state
    },
    getters: {
        ...axiosStore.getters
    },
    mutations: {
        ...axiosStore.mutations
    },
    actions: {
        ...axiosStore.actions
    },
    modules: { ...modules }
})