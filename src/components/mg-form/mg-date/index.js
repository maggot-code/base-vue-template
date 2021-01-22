/*
 * @Author: maggot-code
 * @Date: 2021-01-21 17:56:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-22 11:13:27
 * @Description: export component mg-date
 */
import MgDate from './mg-date';

/* istanbul ignore next */
MgDate.install = function (Vue) {
    Vue.component(MgDate.name, MgDate);
};

export default MgDate;