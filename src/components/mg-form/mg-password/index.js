/*
 * @Author: maggot-code
 * @Date: 2021-01-10 19:43:19
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-10 19:43:51
 * @Description: component mg-form -> mg-password install
 */
import MgPassword from './mg-password';

/* istanbul ignore next */
MgPassword.install = function (Vue) {
    Vue.component(MgPassword.name, MgPassword);
};

export default MgPassword;