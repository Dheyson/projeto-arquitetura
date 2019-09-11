import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './registerServiceWorker'
import './quasar'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
// Vue.prototype.$http  =  axios;
// const  accessToken  =  localStorage.getItem('access_token')

// if (accessToken) {
//     Vue.prototype.$http.defaults.headers.common['Authorization'] =  accessToken
// }

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
