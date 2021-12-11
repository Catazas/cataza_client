import Vue from "vue";
import Vuex from "vuex";
import { Api } from "../apis";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    login(context, payload) {
      return Api.post("/users/login", payload);
    },
    register(context, payload) {
      return Api.post("/users/register", payload);
    },
  },
  modules: {},
});
