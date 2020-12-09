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
        if ([49, 50, 51, 52].includes(event.keyCode)) {
          event.preventDefault()
          switch (event.keyCode) {
            case 49:
              _this.$events.emit('button-pressed-prev')
              break
            case 50:
              _this.$events.emit('button-pressed-next')
              break
            case 51:
              _this.$events.emit('button-pressed-home')
              break
            case 52:
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
