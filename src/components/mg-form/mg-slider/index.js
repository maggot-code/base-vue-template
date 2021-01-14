/*
 * @Author: maggot-code
 * @Date: 2021-01-14 15:13:14
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-14 15:14:11
 * @Description: export component mg-slider 
 */
import MgSlider from './mg-slider';

/* istanbul ignore next */
MgSlider.install = function (Vue) {
    Vue.component(MgSlider.name, MgSlider);
};

export default MgSlider;
