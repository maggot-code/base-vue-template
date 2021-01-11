/*
 * @Author: maggot-code
 * @Date: 2021-01-11 11:13:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-11 11:13:47
 * @Description: component mg-form -> mg-reset install
 */
import MgReset from './mg-reset';

/* istanbul ignore next */
MgReset.install = function (Vue) {
    Vue.component(MgReset.name, MgReset);
};

export default MgReset;
