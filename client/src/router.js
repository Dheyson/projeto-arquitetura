import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/main/Main'
import Home from './views/home/Home'

import { homedir } from 'os';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
    },
    {
      path: '/home',
      component: Home,
    }
  ]
})
