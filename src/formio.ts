import Vue from 'vue';
import { Plugin as FormioPlugin } from 'vue-formio';
import providers from './providers';

export default (store, router) => {
  Vue.use(FormioPlugin, { providers, store, router });

  // Vue.$formio.setProjectUrl(config.projectUrl);
  // Vue.$formio.setBaseUrl(config.apiUrl);
};
