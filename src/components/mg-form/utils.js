/*
 * @Author: maggot-code
 * @Date: 2021-01-14 14:32:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-14 14:37:00
 * @Description: component mg-form utils tool
 */
import { flake } from '@/utils/tool';
import { compact } from 'lodash';

export const checkEnum = (list) => compact(list.map((item) => {
    if (item.value && item.label) {
        item.rid = flake.gen();
        item.disabled = item.disabled || false;
        return item;
    } else {
        console.error(
            `%c 枚举列表:%o缺少成员属性：[value,label]!\n请检查api json%o`,
            "background:#f56c6c;color:#fff;",
            item,
            list
        );
        return false;
    }
}))
