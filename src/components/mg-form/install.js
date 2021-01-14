/*
 * @Author: maggot-code
 * @Date: 2021-01-14 13:35:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-14 14:48:03
 * @Description: component form cell install
 */
import MgInput from "./mg-input";
import MgRadio from './mg-radio';
import MgCheckBox from './mg-check-box';
import MgSwitch from './mg-switch';

const components = [
    MgInput,
    MgRadio,
    MgCheckBox,
    MgSwitch
];

const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const FormCellComponent = {};
components.forEach(component => {
    FormCellComponent[component.name] = component;
})

export {
    FormCellComponent,
    MgInput,
    MgRadio,
    MgCheckBox,
    MgSwitch
}

export default { install };
