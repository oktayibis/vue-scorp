import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
  },
  mutations: {
    login(state, user) {
      state.userInfo = user;
    },
    logout(state) {
      state.userInfo = null;
    },
  },
  actions: {
    login(context, params) {
      context.commit('login', params);
    },
    logout(context) {
      context.commit('logout');
    },
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    },
    isUserAuth(state) {
      return !!state.userInfo;
    },
  },
});
