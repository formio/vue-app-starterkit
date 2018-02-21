import { Provider } from 'vue-formio';
import routes from './router';
// import store from './store';
import * as views from './views';

const settings = {
  name: 'test',
  routes,
  // store,
  views,
};

export default new Provider(settings);
