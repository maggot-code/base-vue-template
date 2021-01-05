/*
 * @Author: maggot-code
 * @Date: 2021-01-04 14:24:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-01-05 15:41:44
 * @Description: application main options
 */
import '@/utils/error/rejection';

import Vue from 'vue';
import router from '@/router';
import store from '@/store';
import App from '@/App';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')