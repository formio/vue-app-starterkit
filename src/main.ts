import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { registerProviders } from './formio';
import './registerServiceWorker';
import './index.scss';

Vue.config.productionTip = false;

// Register all form.io providers.
registerProviders(router, store);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
