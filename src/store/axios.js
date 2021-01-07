/*
 * @Author: maggot-code
 * @Date: 2021-01-06 09:20:47
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-06 15:02:10
 * @Description: store axios
 */
import { filter } from 'lodash';

export const state = {
    requestQueue: new Map()
};

export const getters = {
    getRequestQueue: state => state.requestQueue
};

export const mutations = {
    /**
     * @description: 加入请求队列
     * @param {Object} member 入列成员对象
     */
    joinRequestQueue(state, member) {
        const {
            requestId,
            requestTag,
            cancelToken
        } = member;
        state.requestQueue.set({ requestId, requestTag }, cancelToken);
    },

    /**
     * @description: 移除请求队列
     */
    removeRequestQueue(state, memberId) {
        const baseKeysList = state.requestQueue.keys();

        const keysList = [];
        for (const iterator of baseKeysList) {
            keysList.push(iterator);
        }

        const find = filter(keysList, (member) => member.requestId === memberId);
        if (find.length <= 0) {
            return false;
        }

        const cancelFunc = state.requestQueue.has(find[0]);
        if (!cancelFunc) {
            return false;
        }

        state.requestQueue.get(find[0])({
            data: {},
            headers: {},
            status: 200,
            statusText: "OK"
        });
        state.requestQueue.delete(find[0]);
    }
};

export const actions = {
    _joinRequestQueue({ commit }, member) {
        commit('joinRequestQueue', member);
    },
    _removeRequestQueue({ commit }, memberId = null) {
        commit('removeRequestQueue', memberId)
    }
};