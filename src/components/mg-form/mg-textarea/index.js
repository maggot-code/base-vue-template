/*
 * @Author: maggot-code
 * @Date: 2021-01-10 22:23:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-10 22:24:22
 * @Description: component mg-form -> mg-textarea install
 */
import MgTextarea from './mg-textarea';

/* istanbul ignore next */
MgTextarea.install = function (Vue) {
    Vue.component(MgTextarea.name, MgTextarea);
};

export default MgTextarea;