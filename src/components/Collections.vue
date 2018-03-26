<template> 

<v-app>
    <v-container container_body>
    <h1>Our collections</h1>
        <v-layout row wrap layout_cards_products>
            <v-flex xl2 lg3 md4 sm6 xs12 v-for="(collection,index) in collections" :id="collection.name" :key="collection.id"> <!--la div contenant chaque collection a pour id le nom de sa collection-->
                <v-card>
                        <v-card-media :src="collection.img_path" height="250px" :contain="true">
                            <v-flex class="container_icones"> <!--les images ont un espace blanc a droite 
                            et a gauche on comble cette espace par des boutons-->
                                <v-btn fab dark medium color="pink" class="btn_cancel" @click="deleteCollection_fromStore({id: collection.id,index: index})" v-if= "collection.selected">
                                    <v-icon dark>favorite</v-icon>
                                </v-btn>
                                <v-btn fab dark medium color="indigo" class="btn_add" @click="addCollection_inStore({id: collection.id,index: index})" v-else> <!--quand on clique on appelle ma function qui a pour argument le titre de la collection et l'index qui sert a changer l'etat d'une propriété-->
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
<!--
        <v-flex class="btn_top_page">
            <v-btn color="pink" dark large  bottom left fab>
                <v-icon>keyboard_arrow_up</v-icon>
            </v-btn>
        </v-flex>
-->
    </v-container>
</v-app>

</template>

<script>
//
import axios from 'axios'
import store from '../store.js'
import Vuex from 'vuex'

export default {
    store: store,
  mounted() {
    if(!this.collections.length){
      this.getCollections_fromAPI();
    }
  },
  computed:{
      ...Vuex.mapGetters(['collections','isOnProducts'])
  },
  methods: {
      ...Vuex.mapActions({
          addCollection_inStore: 'addCollection',
          deleteCollection_fromStore: 'deleteCollection',
          getCollections_fromAPI: 'fetchCollections',
          switchPage:'switchPage'}),

    openCollection(id_collection) {
      this.$router.push({
        path: "Produits",
        query: { idCollection: id_collection }
      });
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