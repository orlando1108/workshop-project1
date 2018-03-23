import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Collections from '@/components/Collections'
import menu from '@/components/menu'
import produits from '@/components/produits'
import handcream_black_tea from '@/components/handcream_black_tea'
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
        path: '/collections',
        name: 'Collections',
        component: Collections
    },
    {
        path: '/menu',
        name: 'menu',
        component: menu
    },
    {
        path: '/produits',
        name: 'produits',
        component: produits
    },
    {
        path: '/handcream_black_tea',
        name: 'handcream_black_tea',
        component: handcream_black_tea
    }
  ]
})
