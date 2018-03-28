
import Vue from 'vue'
import router from './router'
import App from './App'
import 'vuetify/dist/vuetify.min.css'
import Alerte from '@/components/Alerte'

Vue.config.productionTip = false


var vm = new Vue({
  el: '#app',
  router,
  components: { App, Alerte },
  template: '<App/>'
})

global.vm = vm;




