<template> 

<v-app>
    <v-container container_body>
    
    <h1 id="top_page">Our collections</h1>
        <v-layout row wrap layout_cards_products>
            <v-flex xl2 lg3 md4 sm6 xs12 v-for="(collection,index) in collections" :id="collection.name" :key="collection.id"> <!--la div contenant chaque collection a pour id le nom de sa collection-->
                <v-card>
                        <v-card-media :src="collection.img_path" height="250px" :contain="true">
                            <v-flex class="container_icones"> <!--les images ont un espace blanc a droite 
                            et a gauche on comble cette espace par des boutons-->
                                <v-btn fab dark medium color="pink" class="btn_cancel" @click="deleteCollection_fromStore({id: collection.id,index: index})" v-if= "collection.selected">
                                    <v-icon dark>favorite</v-icon>
                                </v-btn>
                                <v-btn fab dark medium color="indigo" class="btn_add" @click="addCollection_inStore({id: collection.id, name: collection.name, imgpath: collection.img_path, link:collection.img_link, index: index})" v-else> <!--quand on clique on appelle ma function qui a pour argument le titre de la collection et l'index qui sert a changer l'etat d'une propriété-->
                                    <v-icon dark>add</v-icon>
                                </v-btn>
                                <!--< <router-link :to="{name: 'Produits', params: {id_collection:collection.id}}">-->
                                <v-btn fab medium dark color="teal" @click="openCollection(collection.id)">
                                    <v-icon>info</v-icon>
                                </v-btn>
                            </v-flex>
                        </v-card-media>
                        <v-card-title primary-title class='white--text' @click="openCollection(collection.id)">
                            <h3 class="headline mb-0">{{ collection.name }}</h3>
                        </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
        <v-fab-transition>
            <v-btn color="pink" class="btn_to_top" fab dark fixed bottom right v-scroll="onScroll" v-show="fab" @click="$vuetify.goTo(target, options)">
                <v-icon>keyboard_arrow_up</v-icon>
            </v-btn>
        </v-fab-transition>
    </v-container>
</v-app>

</template>

<script>
//
import axios from 'axios'
import store from '../store.js'
import Vuex from 'vuex'
import * as easings from 'vuetify/es5/util/easing-patterns'

export default {
    data () {
        return {
            fab: false,
            type: 'number',
            number:0,
            duration: 300,
            offset: 0,
            easing: 'easeInOutCubic',
            easings: Object.keys(easings)
        }
    },
  store: store,
  mounted() {
    /*console.log("MOUTED COLLECTIONS  " + this.collections.length);
    console.log("MOUTED STORE  " + JSON.stringify(this.$store));*/
    if(!this.collections.length){
      this.getCollections_fromAPI();
    }
  },
  computed:{
      target () {
          const value = this[this.type]
          if (!isNaN(value)) return Number(value)
          else return value
      },
      options () {
          return {
              duration: this.duration,
              offset: this.offset,
              easing: this.easing
          }
      },
      ...Vuex.mapGetters(['collections','isOnProducts'])
  },
    methods: {
        ...Vuex.mapActions({
            onScroll () {
                if (typeof window === 'undefined') return
                const top = window.pageYOffset ||
                    document.documentElement.offsetTop || 0
                this.fab = top >20 /*a partir de combien de px de scroll en hauteur le bouton retour vers le haut apparait*/
            },
            addCollection_inStore: 'addCollection',
            deleteCollection_fromStore: 'deleteCollection',
            getCollections_fromAPI: 'fetchCollections',
            switchPage:'switchPage'}),
            openCollection(id_collection) {
            this.$router.push({
            path: "Produits",
            query: { idCollection: id_collection }
            });

            console.log('ID  '+ id_collection);
    this.switchPage();
    },
}
}
</script>
<style scoped> /*css appliqué que pour cette vue grâce au mot clé scoped*/
/*couleur de fond pour chaque collection selon le document sur le drive (sharepoint/docs/pantone&policy) https://drive.google.com/drive/folders/1up_xhP11L64vZTDStzCjKSOppzEfP-bO*/
div[id="BLACK & WHITE"] div.card__title {
  background-color: #231f20;
}
div[id="EXTRA PUR"] div.card__title {
  background-color: #cfd1ce;
}
div[id="GROOMING FOR MEN"] div.card__title {
  background-color: #357aa1;
}
div[id="KARITE"] div.card__title {
  background-color: #d9c89e;
}
div[id="MAISON"] div.card__title {
  background-color: #53c1b6;
}
div[id="TERRA"] div.card__title {
  background-color: #cfd1ce;
}
div[id="COLOGNE"] div.card__title {
  background-color: #357aa1;
}
div[id="VERSION ORIGINALE"] div.card__title {
  background-color: #d9c89e;
}
div[id="BASTIDE"] div.card__title {
  background-color: #53c1b6;
}
div[id="MUCEM X COMPAGNIE DE PROVENCE"] div.card__title {
  background-color: #5b5e5f;
}
</style>