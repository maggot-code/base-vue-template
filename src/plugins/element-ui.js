/*
 * @Author: maggot-code
 * @Date: 2021-01-07 10:09:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-18 11:19:53
 * @Description: element ui plugins
 */
import Vue from 'vue';
import MgLoading from '@/utils/loading';
import {
    // Basic
    Row,
    Col,
    Button,
    // Form
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Switch,
    Input,
    Slider,
    Rate,
    Option,
    OptionGroup,
    Cascader,
    CascaderPanel,
    Select,
    Form,
    FormItem,
    // Data
    // Notice
    Loading,
    // Navigation
    // Others
} from 'element-ui';

// Basic
Vue.use(Row);
Vue.use(Col);
Vue.use(Button);
// Form
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Input);
Vue.use(Slider);
Vue.use(Rate);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Cascader);
Vue.use(CascaderPanel);
Vue.use(Select);
Vue.use(Form);
Vue.use(FormItem);
// Data
// Notice
Vue.use(Loading.directive);
Vue.prototype.$loading = (options) => MgLoading(Loading.service, options);
// Navigation
// Others