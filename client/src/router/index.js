import Vue from "vue";
import Main from "@/views/Main";
import Home from "@/views/Home";
// import NotFound from '@/views/404'
import Router from "vue-router";
import beforeEach from './beforeEach'

Vue.use(Router);

const UserHome = { template: '<div>Home</div>' }
const UserProfile = { template: '<div>Profile</div>' }
const UserPosts = { template: '<div>Posts</div>' }

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
        public: true,
        onlyWhenLoggedOut: true
      },
      children: [
        { path: '', component: UserHome },
        { path: 'profile', component: UserProfile },
        { path: 'posts', component: UserPosts }
      ]
    },
    { path: "*", redirect: { name: "404" } }
  ]
});

router.beforeEach(beforeEach)

export default router