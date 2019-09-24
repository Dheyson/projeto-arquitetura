/* eslint-disable */

import Vue from "vue";
import Main from "@/views/Main";
import Home from "@/views/Home";
import Router from "vue-router";
import store from "../store/index";

// import beforeEach from './beforeEach'

// import NotFound from '@/views/404'
Vue.use(Router);

// const UserHome = { template: '<div>Home</div>' }
// const UserProfile = { template: '<div>Profile</div>' }
// const UserPosts = { template: '<div>Posts</div>' }

// Cada rota e chamada de record(route records)
const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: "main",
      path: "/",
      component: Main
    },
    {
      name: "home",
      path: "/home",
      component: Home,
      meta: {
        requiresAuth: true
        // public: true,
        // onlyWhenLoggedOut: true
      }
    }
    // { path: "*", redirect: { name: "404", component: Erro } }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }

    next("/");
  }
});

export default router;
