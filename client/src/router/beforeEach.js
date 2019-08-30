import store from '../store'

export default async (to, from, next) => {
  document.title = `${to.name} - Resumidos`

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters['auth/hasToken']) {
      try {
        await store.dispatch('auth/ActionCheckToken')

        next()
      } catch (err) {
        next({ name: 'main' })
      }
    } else {
      next()
    }
  } else {
    next()
  }
}
