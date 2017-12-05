import Vue from 'vue';
import VueRouter from 'vue-router';

// import store from './app/store';
import Main from './app/containers/Main.vue';
import Home from './app/containers/Home.vue';
import Auth from './app/containers/Auth.vue';
import './index.scss';

Vue.use(VueRouter);

const router = new VueRouter({
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

export default new Vue({
  el: '#root',
  router,
  render: h => h('router-view')
});
