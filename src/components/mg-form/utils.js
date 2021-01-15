/*
 * @Author: maggot-code
 * @Date: 2021-01-14 14:32:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-15 16:44:57
 * @Description: component mg-form utils tool
 */
import { flake } from '@/utils/tool';
import { compact, cloneDeep } from 'lodash';

export const checkEnumGroup = (list) => compact(cloneDeep(list).map(item => {
    if (item.label && (item.options || item.value)) {
        item.rid = flake.gen();
        item.disabled = item.disabled || false;
        item.options = item.options.map(cell => {
            cell.rid = flake.gen();
            cell.disabled = cell.disabled || false;
            return cell;
        })
        return item;
    } else {
        console.error(
            `%c 枚举列表:%o缺少成员属性：[label,options || value]!\n请检查api json%o`,
            "background:#f56c6c;color:#fff;",
            item,
            list
        );
        return false;
    }
}))

export const checkEnum = (list) => compact(cloneDeep(list).map((item) => {
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
