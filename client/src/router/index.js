import Vue from "vue";
import Main from "@/views/Main";
import Home from "@/views/Home";
import Router from "vue-router";
//import beforeEach from './beforeEach'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Main
    },
    {
      path: "/home",
      component: Home
    },
    { path: "*", redirect: { name: "home" } }
  ]
});

//router.beforeEach(beforeEach)
