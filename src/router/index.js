import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Collections from '@/components/Collections'
import Produits from '@/components/Produits'
import Menu from '@/components/Menu'

import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
        path: '/',
        name: 'Collections',
        components: {
          default: Collections,
          header: Menu
        },
    },
    {
      path: '/produits', //nom du parametre dans le router link
      name: 'Produits',
      components: {
        default: Produits,
        header: Menu
      }
      
    }
  ]
})
