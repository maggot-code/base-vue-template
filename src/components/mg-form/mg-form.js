/*
 * @Author: maggot-code
 * @Date: 2021-01-08 17:38:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-11 18:16:31
 * @Description: components render mg-form.js
 */
import Vue from 'vue';
import { MgSubmit, MgReset, MgRadio, MgInput, MgPassword, MgTextarea } from "@/components/mg-form";

// 组件映射表
const componentMappingTable = (name) => {
    const mappingTable = {
        'mg-radio': MgRadio,
        'mg-input': MgInput,
        'mg-password': MgPassword,
        'mg-textarea': MgTextarea
    };
    return mappingTable[name] || false;
}

// 表单项单元格
const formItemCell = (createElement, schemaCell) => {
    const { field, cell } = schemaCell;

    const component = componentMappingTable(cell.componentName);
    if (!component) {
        return false;
    }

    return createElement('el-form-item', {
        props: {
            label: cell.label
        },
    }, [createElement(component)])
}

// schema转换单元格
const schemaToCell = (createElement, formSchema) => Object.keys(formSchema).map(
    keys => formItemCell(
        createElement,
        { field: keys, cell: formSchema[keys] }
    )
);

export default Vue.component('mg-form', {
    functional: true,
    name: 'mg-form',
    render: function (createElement, context) {
        console.log(context);
        return createElement(
            'el-form',
            {
                props: { ...context.props }
            },
            [
                ...schemaToCell(createElement, context.props.formSchema),
                createElement('el-form-item', {}, [
                    createElement(MgReset),
                    createElement(MgSubmit)
                ]),
            ]
        )
    },
});
