import Vue from 'vue'
import VueRouter from 'vue-router'
const THEME = process.env.VUE_APP_THEME || 'default'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(`@/components/themes/${THEME}/home`)
  },
  {
    path: '/sort',
    name: 'sort',
    component: () => import('@/components/themes/series/contest')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
