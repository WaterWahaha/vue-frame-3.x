import Vue from 'vue'
import App from './App'
import router from './router'
import host from './utils/request.js'
import axios from 'axios'
import qs from 'qs'

global.host= host;
Vue.prototype.$qs = qs;
Vue.prototype.axios = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})