/*
 * @Author: maggot-code
 * @Date: 2021-01-14 14:22:48
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-14 14:25:13
 * @Description: export component mg-checkbox 
 */
import MgCheckBox from './mg-check-box';

/* istanbul ignore next */
MgCheckBox.install = function (Vue) {
    Vue.component(MgCheckBox.name, MgCheckBox);
};

export default MgCheckBox;
