import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import Router from "vue-router";
import "./registerServiceWorker";
import "./quasar";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Router);
const accessToken = localStorage.getItem("access_token");

if (accessToken) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = accessToken;
}

const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
