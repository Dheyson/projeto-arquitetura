import Vue from "vue";
import Main from "@/views/Main";
import Home from "@/views/Home";
import Router from "vue-router";
import beforeEach from './beforeEach'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'main',
      path: "/",
      component: Main
    },
    {
      name: 'home',
      path: "/home",
      component: Home,
      meta: {
        public: true,
        onlyWhenimportLoggedOut: true
      }
    },
    { path: "*", redirect: { name: "home" } }
  ]
});

router.beforeEach(beforeEach)

export default router