import Vue from 'vue'
import Meta from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from './utils/axios'
import events from 'events-vue-allin'

Vue.config.productionTip = false
Vue.use(axios)
Vue.use(events)
Vue.use(Meta)
new Vue({
  router,
  store,
  axios,
  events,
  Meta,
  mounted () {
    const _this = this
    window.addEventListener(
      'keydown',
      function (event) {
        if ([33, 34, 27, 116, 190].includes(event.keyCode)) {
          event.preventDefault()
          switch (event.keyCode) {
            case 33:
              _this.$events.emit('button-pressed-prev')
              break
            case 34:
              _this.$events.emit('button-pressed-next')
              break
            case 190:
              _this.$events.emit('button-pressed-home')
              break
            default:
              _this.$events.emit('button-pressed-enter')
              break
          }
        }
      },
      true
    )
  },
  render: (h) => h(App)
}).$mount('#app')
