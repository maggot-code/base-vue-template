/*
 * @Author: maggot-code
 * @Date: 2021-01-14 15:44:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-14 15:45:08
 * @Description: export component mg-cascader
 */
import MgCascader from './mg-cascader';

/* istanbul ignore next */
MgCascader.install = function (Vue) {
    Vue.component(MgCascader.name, MgCascader);
};

export default MgCascader;
