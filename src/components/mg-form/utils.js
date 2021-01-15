/*
 * @Author: maggot-code
 * @Date: 2021-01-14 14:32:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-15 18:21:25
 * @Description: component mg-form utils tool
 */
import { flake } from '@/utils/tool';
import { compact, cloneDeep } from 'lodash';

export const resetTrees = (tree) => compact(tree.map(item => {
    if (item.label && item.value) {
        item.rid = flake.gen();
        item.disabled = item.disabled || false;
        if (item.children) {
            if (item.children.length > 0) {
                resetTrees(item.children)
            } else {
                delete item.children
            }
        }
        return item;
    } else return checkErrorLog(item, tree, '枚举树')
}))

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
    } else return checkErrorLog(item, list, '枚举列表')
}))

export const checkEnum = (list) => compact(cloneDeep(list).map((item) => {
    if (item.value && item.label) {
        item.rid = flake.gen();
        item.disabled = item.disabled || false;
        return item;
    } else return checkErrorLog(item, list, '枚举列表')
}))

const checkErrorLog = (item, list, msg) => {
    console.error(
        `%c ${msg}:%o缺少成员属性：[value,label]!\n请检查api json%o`,
        "background:#f56c6c;color:#fff;",
        item,
        list
    );
    return false;
}
