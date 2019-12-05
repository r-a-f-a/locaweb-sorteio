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
    path: '/list',
    name: 'list',
    component: () => import(`@/components/themes/${THEME}/list`)
  },
  {
    path: '/draw/:type',
    name: 'draw',
    component: () => import(`@/components/themes/${THEME}/draw`)
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
