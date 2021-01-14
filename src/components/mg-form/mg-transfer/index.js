/*
 * @Author: maggot-code
 * @Date: 2021-01-14 15:59:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-14 16:01:25
 * @Description: export component mg-transfer
 */
import MgTransfer from './mg-transfer';

/* istanbul ignore next */
MgTransfer.install = function (Vue) {
    Vue.component(MgTransfer.name, MgTransfer);
};

export default MgTransfer;
