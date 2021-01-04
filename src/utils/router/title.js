/*
 * @Author: maggot-code
 * @Date: 2021-01-04 23:20:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-04 23:27:33
 * @Description: router title options
 */
import { isNil } from 'lodash';

export default to => {
    window.document.title = isNil(to.meta.title) ? process.env.VUE_APP_TITLE : `${to.meta.title} - ${process.env.VUE_APP_TITLE}`;
}
