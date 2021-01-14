/*
 * @Author: maggot-code
 * @Date: 2021-01-14 15:55:13
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-14 15:56:12
 * @Description: export component mg-upload
 */
import MgUpload from './mg-upload';

/* istanbul ignore next */
MgUpload.install = function (Vue) {
    Vue.component(MgUpload.name, MgUpload);
};

export default MgUpload;
