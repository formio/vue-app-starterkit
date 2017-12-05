import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from './containers/Main.vue';
import Home from './containers/Home.vue';
import Auth from './containers/Auth.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'auth',
          components: {
            default: Auth
          }
        }
      ]
    }
  ]
});
