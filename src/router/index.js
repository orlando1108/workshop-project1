import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import form from '@/components/form'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', //racine
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path: '/form', //racine
        name: 'Form',
        component: form
    }
  ]
})
