/*
 * @Author: maggot-code
 * @Date: 2021-01-13 16:35:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-13 16:43:48
 * @Description: export component mg-form
 */
import MgForm from './mg-form';

/* istanbul ignore next */
MgForm.install = function (Vue) {
    Vue.component(MgForm.name, MgForm);
};

export default MgForm;
