import Vue from 'vue'
import VueRouter from 'vue-router'
const THEME = process.env.VUE_APP_THEME || 'default'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(`@/themes/${THEME}/components/home`)
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(`@/themes/${THEME}/components/list`)
  },
  {
    path: '/draw/:type',
    name: 'draw',
    component: () => import(`@/themes/${THEME}/components/draw`)
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
