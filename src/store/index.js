/*
 * @Author: maggot-code
 * @Date: 2021-01-04 17:54:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-08 09:58:39
 * @Description: store inlet
 */
import Vue from 'vue';
import Vuex from 'vuex';
import * as axiosStore from '@/store/axios';
import * as nprogressStore from '@/store/nprogress';
import modules from '@/store/modules';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        ...axiosStore.state,
        ...nprogressStore.state,
    },
    getters: {
        ...axiosStore.getters,
        ...nprogressStore.getters,
    },
    mutations: {
        ...axiosStore.mutations,
        ...nprogressStore.mutations,
    },
    actions: {
        ...axiosStore.actions,
        ...nprogressStore.actions,
    },
    modules: { ...modules }
})