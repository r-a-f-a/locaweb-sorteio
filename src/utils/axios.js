'use strict'
const axios = require('axios')

class Axios {
  constructor () {
    return axios.create({
      baseURL: process.env.VUE_APP_API
    })
  }
}
const api = new Axios()
Axios.install = function (Vue) {
  Vue.prototype.$api = api
}

export default Axios
