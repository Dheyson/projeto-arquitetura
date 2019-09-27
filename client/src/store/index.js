/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { user: {}, token: "" },
  status: {
    token: localStorage.getItem("token") || "",
    user: {}
  },
  mutations: {
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
        axios
          .post("/login", loginRequest)
          .then(res => {
            const token = res.data.token;
            const user = res.data.user;

            localStorage.setItem("token", token);

            // Add the following line:
            axios.defaults.headers.common["Authorization"] = token;

            commit("auth_success", user);
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
        const url = "/register";
        axios
          .post(url, registerRequest)
          .then(res => {
            const token = res.data.token;
            const user = res.data.user;

            localStorage.setItem("token", token);

            // Add the following line:
            axios.defaults.headers.common["Authorization"] = token;

            commit("auth_success", user);
            resolve(res);
          })
          .catch(err => {
            localStorage.removeItem("token");

            commit("auth_error", err);
            reject(err);
          });
      });
    },

    sendResume({ commit }, resume) {
      return new Promise((resolve, reject) => {
        axios
          .post("/resume", resume)
          .then(res => {
            console.log(res.data);
            resolve();
          })
          .catch(err => {
            console.log(err.message);
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
