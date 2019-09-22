/* eslint-disable */ 
import Vue from "vue";
import Main from "@/views/Main";
import Home from "@/views/Home";
import Router from "vue-router";
import store from '../store/index'

Vue.use(Router);


const router = new Router({ // Cada rota e chamada de record(route records)
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'main',
      path: "/",
      component: Main
    },
    {
      name: 'home',
      path: "/home", // /user/:id
      component: Home,
      meta: {
        requiresAuth: true
        // public: true,
        // onlyWhenLoggedOut: true
      },
    },
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router