import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import formio from './formio';
import './registerServiceWorker';
import './index.scss';

Vue.config.productionTip = false;

// This will add routes and store for each formio provider.
formio(store, router);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
