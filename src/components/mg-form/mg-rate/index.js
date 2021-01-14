/*
 * @Author: maggot-code
 * @Date: 2021-01-14 15:25:49
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-14 15:27:14
 * @Description: export component mg-rate
 */
import MgRate from './mg-rate';

/* istanbul ignore next */
MgRate.install = function (Vue) {
    Vue.component(MgRate.name, MgRate);
};

export default MgRate;