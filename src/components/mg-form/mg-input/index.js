/*
 * @Author: maggot-code
 * @Date: 2021-01-13 16:49:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-13 16:50:48
 * @Description: export component mg-input
 */
import MgInput from './mg-input';

/* istanbul ignore next */
MgInput.install = function (Vue) {
    Vue.component(MgInput.name, MgInput);
};

export default MgInput;
