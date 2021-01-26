/*
 * @Author: maggot-code
 * @Date: 2021-01-14 14:32:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-26 18:07:16
 * @Description: component mg-form utils tool
 */
import { flake, mapObjectRepeat } from '@/utils/tool';
import { compact, cloneDeep, isString, isArray, isNil, isBoolean, isObject } from 'lodash';

export const resetTrees = (tree, lazy) => compact(tree.map(item => {
    if (item.label && item.value) {
        item.rid = flake.gen();
        item.disabled = item.disabled || false;
        item.leaf = !isNil(item.leaf) && isBoolean(item.leaf) ? item.leaf : true;

        if (item.children) {
            if (item.children.length > 0) {
                resetTrees(item.children, lazy)
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

// ---------------------分隔符----------------------------------
export const getWorker = (schema, tagName) => {
    return compact(Object.keys(schema).map(field => {
        return schema[field].workerTag.indexOf(tagName) >= 0 && schema[field]
    }))
}
/**
 * @description: 设置表单结构
 * @param {Array[Object]} schema 结构定义
 * @return {Array[Object]} 验证过滤后的结构定义
 */
export const setupFormSchema = (schema) => {
    // const copyToSchema = {};
    const copyToSchema = new Map();

    schema.forEach((cellSchema) => {
        const isSchemaFormat = provingSchemaFormat(cellSchema);
        const repeatObjectKey = mapObjectRepeat(copyToSchema, cellSchema.field, schema);

        if (isSchemaFormat && repeatObjectKey) {
            // copyToSchema[cellSchema.field] = cellSchema;
            copyToSchema.set(cellSchema.field, cellSchema);
        }
    });

    return copyToSchema;
}

/**
 * @description: 验证表单项结构格式
 * @param {Object} cellSchema 表单项结构对象
 * @return {Boolean | Object} false | 表单项结构对象
 */
const provingSchemaFormat = (cellSchema) => {
    const {
        componentName,
        field,
        value,
        dataSchema,
        uiSchema,
        eventSchema,
        rulesSchema,
        leaderTag,
        workerTag
    } = cellSchema;

    const isFormSchema = [
        {
            field: "componentName",
            errLog: '请检查组件名称是否正确',
            check: provingComponentName(componentName)
        },
        {
            field: "field",
            errLog: "请检查字段名称是否正确",
            check: provingString(field)
        },
        {
            field: "value",
            errLog: "请检查数据值是否正确",
            check: true
        },
        {
            field: "dataSchema",
            errLog: '请检查数据属性是否正确',
            check: provingObject(dataSchema)
        },
        {
            field: "uiSchema",
            errLog: '请检查UI属性是否正确',
            check: provingObject(uiSchema)
        },
        {
            field: "eventSchema",
            errLog: '请检查事件属性是否正确',
            check: provingObject(eventSchema)
        },
        {
            field: "rulesSchema",
            errLog: '请检查验证格式是否正确',
            check: provingArrayLikeObjectOrString(rulesSchema)
        },
        {
            field: "leaderTag",
            errLog: '请检查领袖标签格式是否正确',
            check: provingArrayLikeObjectOrString(leaderTag)
        },
        {
            field: "workerTag",
            errLog: '请检查工人标签格式是否正确',
            check: provingArrayLikeObjectOrString(workerTag)
        }
    ].map(item => item.check || schemaErrorLog(item.errLog, item.field, cellSchema[item.field]))

    return isFormSchema.indexOf(false) >= 0 ? false : {
        componentName,
        field,
        value,
        uiSchema,
        eventSchema,
        rulesSchema,
        leaderTag,
        workerTag
    }
}

/**
 * @description: 验证字符串
 * @param {String} variable
 * @return {Boolean} 字符串是否合法
 */
const provingString = (variable) => {
    const nil = isNil(variable);
    const str = isString(variable);
    const len = variable.length > 0;

    return !nil && str && len;
}

/**
 * @description: 验证组件名
 * @param {String} variable
 * @return {Boolean} 组件名是否合法
 */
const provingComponentName = (variable) => {
    const str = provingString(variable);
    const len = variable.length > 3;
    const find = variable[0] === 'm' && variable[1] === 'g' && variable[2] === '-';

    return str && len && find;
}

/**
 * @description: 验证复合数组
 * @param {Array[Object | String]} variable
 * @return {Boolean} 复合数组是否合法
 */
const provingArrayLikeObjectOrString = (variable) => {
    const nil = isNil(variable);
    const arr = isArray(variable);
    if (variable.length <= 0) return true;
    if (nil && !arr) return false;

    const objOrStr = variable.map(item => {
        const obj = isObject(item);
        const str = isString(item);
        return obj || str;
    })

    return compact(objOrStr).length === variable.length;
}

/**
 * @description: 验证对象
 * @param {Object} variable
 * @return {Boolean} 对象是否合法
 */
const provingObject = (variable) => {
    const nil = isNil(variable);
    const obj = isObject(variable);

    return !nil && obj;
}

/**
 * @description: 结构错误日志
 * @param {String} msg 错误描述
 * @param {String} field 异常字段
 * @param {*} target 异常属性
 * @return {Boolean} false
 */
const schemaErrorLog = (msg, field, target) => {
    console.error(
        `%c ${msg}：${field}\n%o`,
        "background:#f56c6c;color:#fff;",
        target
    );
    return false;
}
