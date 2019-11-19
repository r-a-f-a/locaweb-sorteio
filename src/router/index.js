import Vue from 'vue'
import VueRouter from 'vue-router'
const THEME = process.env.VUE_APP_THEME || 'default'
Vue.use(VueRouter)

const routes = [
  {
<<<<<<< HEAD
    path: "/",
    name: "home",
    component: () => import(`@/components/themes/${THEME}/home`)
  },
  {
    path: "/sort",
    name: "sort",
    component: () => import("@/components/themes/series/contest")
=======
    path: '/',
    name: 'home',
    component: () => import(`@/components/themes/${THEME}/contest`)
>>>>>>> 4feecbfddc1ca59a3656a01cda45674def4dee6f
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
