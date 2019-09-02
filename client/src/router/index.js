import Vue from "vue";
import Main from "@/views/Main";
import Home from "@/views/Home";
import Router from "vue-router";
import beforeEach from './beforeEach'

Vue.use(Router);

export default new Router({
  // mode:history,
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Main
    },
    {
      path:"/login",
      name: 'login',
     // component: Login, 
      meta: {
        public: true,
        onlyWhenimportLoggedOut: true
      }
    },
    {
      path: "/home",
      component: Home
    },
    { path: "*", redirect: { name: "home" } }
  ]
});

Router.beforeEach(beforeEach)
