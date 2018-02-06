import Vue from 'vue';
import formiojs from 'formiojs';
import VueFormio from 'vue-formio';
import providers from './providers';
import VueRouter from 'vue-router';
import { Store } from 'vuex';

Vue.use(VueFormio);

// formiojs.setProjectUrl(config.projectUrl);
// formiojs.setBaseUrl(config.apiUrl);

export function registerProviders(router: VueRouter, store: Store<any>) {
  providers.forEach((provider) => {
    provider.name = 'test';
  });
}

