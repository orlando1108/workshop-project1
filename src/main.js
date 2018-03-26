
import Vue from 'vue'
//import store from './store.js'
//import Vuex from 'vuex'

import router from './router'


import App from './App'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
//import { Store } from './'

Vue.config.productionTip = false


new Vue({
  el: '#app',
  //render: h => h(require('./App')),
  router,
  components: { App },
  template: '<App/>'
})




