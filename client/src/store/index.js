/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  status: {
    token: localStorage.getItem("token") || "",
    user: {}
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token, user) {
      state.status = "success";
      state.token = token;
      state.user = user;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
    }
  },
  actions: {
    login({ commit }, loginRequest) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios
          .post("http://localhost:3000/login", loginRequest)
          .then(res => {
            const token = res.data.token;
            const user = res.data.user;

            localStorage.setItem("token", token);

            // Add the following line:
            axios.defaults.headers.common["Authorization"] = token;

            commit("auth_success", token, user);
            resolve(res);
          })
          .catch(err => {
            localStorage.removeItem("token");

            commit("auth_error");
            reject(err);
          });
      });
    },
    register({ commit }, registerRequest) {
      return new Promise((resolve, reject) => {
        commit("auth_request");

        const url = "http://localhost:3000/register";
        axios
          .post(url, registerRequest)
          .then(res => {
            const token = res.data.token;
            const user = res.data.user;

            localStorage.setItem("token", token);

            // Add the following line:
            axios.defaults.headers.common["Authorization"] = token;

            commit("auth_success", token, user);
            resolve(res);
          })
          .catch(err => {
            localStorage.removeItem("token");

            commit("auth_error", err);
            reject(err);
          });
      });
    },

    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit("logout");

        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];

        resolve();
      });
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  }
});
