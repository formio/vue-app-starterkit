import Vue from 'vue';
import formiojs from 'formiojs';

// import store from './app/store';
import router from './app/router';
import './index.scss';
import config from './config';

formiojs.setProjectUrl(config.projectUrl);
formiojs.setBaseUrl(config.apiUrl);

export default new Vue({
  el: '#root',
  router,
  render: h => h('router-view')
});
