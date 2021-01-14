/*
 * @Author: maggot-code
 * @Date: 2021-01-14 15:32:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-14 15:33:36
 * @Description: export component mg-select
 */
import MgSelect from './mg-select';

/* istanbul ignore next */
MgSelect.install = function (Vue) {
    Vue.component(MgSelect.name, MgSelect);
};

export default MgSelect;