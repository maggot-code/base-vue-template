/*
 * @Author: maggot-code
 * @Date: 2021-01-08 09:49:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-08 13:22:20
 * @Description: store nprogress
 */
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

export const state = {
    stepping: 0.0
};

export const getters = {
    getStepping: state => state.stepping
};

export const mutations = {
    setStepping(state, stepping) {
        state.stepping = stepping > 1 ? 1.0 : stepping;

        // 持续稳定步进
        NProgress.inc(1);

        if (state.stepping >= 1) {
            NProgress.done(true);
            state.stepping = 0.0;
        } else {
            NProgress.set(state.stepping);
        }
    }
};

export const actions = {
    _setStepping({ commit }, stepping) {
        commit('setStepping', stepping)
    }
};