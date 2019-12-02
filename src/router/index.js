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
    path: '/sorteios',
    name: 'sorteios',
    component: () => import(`@/components/themes/${THEME}/sorteios`)
  },
  {
    path: '/sorteios/:type',
    name: 'sorteio',
    component: () => import(`@/components/themes/${THEME}/sorteio`)
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
