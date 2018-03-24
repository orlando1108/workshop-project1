// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Menu from '@/components/Menu'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.config.productionTip = false

/* eslint-disable no-new */

/*Vue.component('header-menu', {
  template: '<div>Un composant personnalisé !</div>'
})*/

Vue.component('header-menu', Menu)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
