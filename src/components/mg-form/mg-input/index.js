/*
 * @Author: maggot-code
 * @Date: 2021-01-10 19:00:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-10 19:00:46
 * @Description: component mg-form -> mg-input install
 */
import MgInput from './mg-input';

/* istanbul ignore next */
MgInput.install = function (Vue) {
    Vue.component(MgInput.name, MgInput);
};

export default MgInput;