/*
 * @Author: maggot-code
 * @Date: 2021-01-08 17:54:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-08 17:57:50
 * @Description: component mg-form -> mg-radio install
 */
import MgRadio from './mg-radio';

/* istanbul ignore next */
MgRadio.install = function (Vue) {
    Vue.component(MgRadio.name, MgRadio);
};

export default MgRadio;