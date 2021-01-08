/*
 * @Author: maggot-code
 * @Date: 2021-01-07 10:09:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-08 17:53:13
 * @Description: element ui plugins
 */
import Vue from 'vue';
import MgLoading from '@/utils/loading';
import {
    // Basic
    Button,
    // Form
    Radio,
    RadioGroup,
    RadioButton,
    // Data
    // Notice
    Loading,
    // Navigation
    // Others
} from 'element-ui';

// Basic
Vue.use(Button);
// Form
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
// Data
// Notice
Vue.use(Loading.directive);
Vue.prototype.$loading = (options) => MgLoading(Loading.service, options);
// Navigation
// Others