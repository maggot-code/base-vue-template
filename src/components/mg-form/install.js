/*
 * @Author: maggot-code
 * @Date: 2021-01-14 13:35:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-14 16:01:48
 * @Description: component form cell install
 */
import MgInput from "./mg-input";
import MgRadio from './mg-radio';
import MgCheckBox from './mg-check-box';
import MgSwitch from './mg-switch';
import MgSlider from './mg-slider';
import MgRate from './mg-rate';
import MgSelect from './mg-select';
import MgCascader from './mg-cascader';
import MgDate from './mg-date';
import MgUpload from './mg-upload';
import MgTransfer from './mg-transfer';

const components = [
    MgInput,
    MgRadio,
    MgCheckBox,
    MgSwitch,
    MgSlider,
    MgRate,
    MgSelect,
    MgCascader,
    MgDate,
    MgUpload,
    MgTransfer
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
    MgSwitch,
    MgSlider,
    MgRate,
    MgSelect,
    MgCascader,
    MgDate,
    MgUpload,
    MgTransfer
}

export default { install };
