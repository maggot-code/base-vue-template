/*
 * @Author: maggot-code
 * @Date: 2021-01-14 13:33:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-14 13:34:34
 * @Description: export component mg-radio
 */
import MgRadio from './mg-radio';

/* istanbul ignore next */
MgRadio.install = function (Vue) {
    Vue.component(MgRadio.name, MgRadio);
};

export default MgRadio;