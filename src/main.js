import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import BootstrapVue from "bootstrap-vue";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

axios.defaults.baseURL = "http://localhost:3000";

new Vue({
  router,
  axios,
  store,
  render: h => h(App)
}).$mount("#app");
