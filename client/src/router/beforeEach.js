// Global before hooks
/* eslint-disable */

import { TokenService } from '../services/storage.service'
// import store from '../store'

export default async(to, from, next) => {
  console.log('Global -- beforeEach - fired')

  document.title = `${to.name} - Resumidos`

  const isPublic = to.matched.some(record => record.meta.public)
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenimportLoggedOut)
  const loggedIn = !!TokenService.getToken  
  
  if (!isPublic && !loggedIn) { // Checa se a rota que requer auth, esta logada, se nao, redireciona para /main
    return next({
      path: '/home',
      query: { redirect: to.fullPath }
    })
  } else if(loggedIn && onlyWhenLoggedOut) {
    return next('/')
  }
  next()
}

