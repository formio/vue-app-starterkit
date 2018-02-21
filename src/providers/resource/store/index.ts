import Vue from 'vue';
import Vuex from 'vuex';
import mutations, {initialState as state} from './mutations';
import * as actions from './actions';
import * as getters from './getters';

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
