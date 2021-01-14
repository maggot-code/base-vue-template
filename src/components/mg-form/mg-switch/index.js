/*
 * @Author: maggot-code
 * @Date: 2021-01-14 14:44:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-14 14:47:39
 * @Description: export component mg-switch 
 */
import MgSwitch from './mg-switch';

/* istanbul ignore next */
MgSwitch.install = function (Vue) {
    Vue.component(MgSwitch.name, MgSwitch);
};

export default MgSwitch;
