/*
 * @Author: maggot-code
 * @Date: 2021-01-14 15:52:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-14 15:54:33
 * @Description: export component mg-date
 */
import MgDate from './mg-date';

/* istanbul ignore next */
MgDate.install = function (Vue) {
    Vue.component(MgDate.name, MgDate);
};

export default MgDate;