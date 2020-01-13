import 'reflect-metadata';

import '@mdi/font/scss/materialdesignicons.scss';
import '@/assets/scss/main.scss';
import 'typeface-roboto';
import 'typeface-roboto-slab';
import 'typeface-lato';

import Vue from 'vue';
import App from '@/views/App.vue';
import Clipboard from 'v-clipboard';

import '@/config/registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(Clipboard);

new Vue({
  render: h => h(App)
}).$mount('#app');
