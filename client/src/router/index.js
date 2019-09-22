/* eslint-disable */ 
import Vue from "vue";
import Main from "@/views/Main";
import Erro from "@/views/404"
import Home from "@/views/Home";
import Router from "vue-router";
import store from '../store/index'
// import beforeEach from './beforeEach'

// import NotFound from '@/views/404'
Vue.use(Router);

// const UserHome = { template: '<div>Home</div>' }
// const UserProfile = { template: '<div>Profile</div>' }
// const UserPosts = { template: '<div>Posts</div>' }

const router = new Router({ // Cada rota e chamada de record(route records)
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'main',
      path: "/",
      component: Main
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login
    // },
    // {
    //   path: '/register',
    //   name: 'register',
    //   component: Register
    // },
    {
      name: 'home',
      path: "/home", // /user/:id
      component: Home,
      meta: {
        requiresAuth: true
        // public: true,
        // onlyWhenLoggedOut: true
      },
      // children: [
      //   { path: '', component: UserHome },
      //   { path: 'profile', component: UserProfile },
      //   { path: 'posts', component: UserPosts }
      // ]
    },
    // { path: "*", redirect: { name: "404", component: Erro } }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    
    next('/login')
  }
})

export default router