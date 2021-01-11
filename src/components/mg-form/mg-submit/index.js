/*
 * @Author: maggot-code
 * @Date: 2021-01-11 11:13:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-11 11:14:50
 * @Description: component mg-form -> mg-submit install
 */
import MgSubmit from './mg-submit';

/* istanbul ignore next */
MgSubmit.install = function (Vue) {
    Vue.component(MgSubmit.name, MgSubmit);
};

export default MgSubmit;