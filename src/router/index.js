import { createRouter, createWebHistory } from 'vue-router'
import routes from './views'
import store from '../store'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0)
  }
})
router.beforeEach(() => {
  store.state.smth.navbarActive = false
})

export default router
