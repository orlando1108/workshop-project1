<template> 

<v-app>
    <v-container>

     <!--   <header-menu></header-menu> -->

    <h1>Nos collections</h1>
        <v-layout row wrap>
            <v-flex xl2 lg3 md4 sm6 xs12 v-for="(collection,index) in fetchCollectionResults" :id="collection.name" :key="collection.id"> <!--la div contenant chaque collection a pour id le nom de sa collection-->
                <v-card>
                    <v-flex class="container_icones">
                        <v-btn fab dark medium color="pink" class="btn_cancel" @click="delete_products(collection.nom,index)" v-if= "collection.select">
                            <v-icon dark>favorite</v-icon>
                        </v-btn>
                        <v-btn fab dark medium color="indigo" class="btn_add" @click="add_products(collection.nom,index)" v-else> <!--quand on clique on appelle ma function qui a pour argument le titre de la collection et l'index qui sert a changer l'etat d'une propriété-->
                            <v-icon dark>add</v-icon>
                        </v-btn>
                        <v-btn fab medium dark color="teal" @click="openCollection(collection.id)">
                            <v-icon>info</v-icon>
                        </v-btn>
                    </v-flex>
                        <v-card-media :src="collection.img_path" height="250px" :contain="true">
                           <!-- <v-container class="container_icones">
                                <v-btn fab dark medium color="pink" class="btn_cancel" @click="deleteCollection(collection.id,index)" v-if= "collection.selected">
                                    <v-icon dark>favorite</v-icon>
                                </v-btn>
                                <v-btn fab dark medium color="indigo" class="btn_add" @click="addCollection(collection.id,index)" v-else> 
                                    <v-icon dark>add</v-icon>
                                </v-btn>
                                    <v-btn fab medium dark color="teal" @click="openCollection(collection.id)">
                                        <v-icon>info</v-icon>
                                    </v-btn>
                            </v-container>-->
                        </v-card-media>
                        <v-card-title primary-title class='white--text' @click="openCollection(collection.id)">
                            <h3 class="headline mb-0">{{ collection.name }}</h3>
                        </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</v-app>

</template>

<script>
//
import axios from "axios";
import STORE from "../store.js";
//var store  = require('../store.js');

export default {
  mounted() {
    this.fetchCollections();
    console.log(" STATE  " + this.state);
    //this.state.addProduct();
  },
  data: () => ({
    state: STORE.state,
    fetchCollectionResults: [],
    query:
      "http://app-c45740da-9596-48ce-ad11-aa12b48f2082.cleverapps.io/api/collections",

    name: "Typeahead",
    valid: "",

    props: {
      source: {
        type: [String, Array],
        required: false
      }
    },
    cards: [
      {
        path: "/static/collections/blackwhite.png",
        name: "Black & White",
        select: false,
        id: 1
      },
      {
        path: "/static/collections/extrapur.png",
        name: "Extra Pur",
        select: false,
        id: 2
      },
      {
        path: "/static/collections/groomingformen.png",
        name: "Grooming For Men",
        select: false,
        id: 3
      },
      {
        path: "/static/collections/karite.jpg",
        name: "Karite",
        select: false,
        id: 4
      },
      {
        path: "/static/collections/maison_home.png",
        name: "Maison Home",
        select: false,
        id: 5
      },
      {
        path: "/static/collections/vo.png",
        name: "Version Originale",
        select: false,
        id: 6
      }
    ]
  }),
  methods: {

    // method to provide index if the collection exists in the global array
    isSelected(id) {
      return this.state.list_collections.indexOf(id);
    },

    //method to redirect to a collection and providing this id to query the BDD
    openCollection(id_collection) {
      this.$router.push({
        path: "Produits",
        query: { idCollection: id_collection }
      });
    },

    addCollection: function(id, index) {

      if (!(this.isSelected(id) > -1) ) {
        this.state.list_collections.push(id);
      }
      this.fetchCollectionResults[index].selected = true;
      console.log(this.state.list_collections);
    },
    deleteCollection: function(id, index) {
      if (this.isSelected(id) > -1) {
        this.state.list_collections.splice(this.isSelected(id), 1);
      }
       this.fetchCollectionResults[index].selected = false;
      console.log(this.state.list_collections);
    },
    fetchCollections() {
      axios
        .get(this.query, {
          headers: {
            "Access-Control-Allow-Origin": true,
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          var collectionList = response.data.Collections.map(collection => {
            let obj = {
              id: collection.id,
              name: collection.nom,
              selected: false,
              img_path: collection.img_path
            };
            return obj;
          });
          this.fetchCollectionResults = collectionList;
          //console.log("DATA   " + JSON.stringify(this.fetchCollectionResults))
        })
        .catch(error => console.error(error));
    }
  }
};
</script>
<style scoped>
<<<<<<< HEAD
/*espace entre les champs du formulaire*/
div.container_input {
  margin: 1% 1%;
}
/*espace entre les div des collections*/
div.card {
  margin: 3% 3%; /*top/bottom right/left*/
}
/*carte ou sont affichés les infos détaillés du produits*/
div.infos_cards {
  height: 400px !important; /*300px img + 100px titre*/
  overflow-y: auto;
}
/*titre dans cette div*/
div.infos_cards h3 {
  font-size: 24px !important;
}
/*container en bas de l'img*/
div.card__title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  color: white !important;
  background-color: #607d8b;
}
/*container icones, le css n'influence que la position des boutons*/
div.container_icones {
  padding-left: 70%;
}
=======

    /*espace entre les champs du formulaire*/
    div.container_input{
        margin:1% 1%;
    }
    /*espace entre les div des collections*/
    div.card{
        margin:3% 3%; /*top/bottom right/left*/
    }
    /*carte ou sont affichés les infos détaillés du produits*/
    div.infos_cards{
        height: 400px !important; /*300px img + 100px titre*/
        overflow-y: auto;
    }
    /*titre dans cette div*/
    div.infos_cards h3{
        font-size: 24px !important;
    }
    /*container en bas de l'img*/
    div.card__title{
        display: flex;
        justify-content: center;
        align-items: center;
        height:100px;
        color: white !important;
        background-color:#607D8B;
    }
    /*container icones, le css n'influence que la position des boutons*/
    div.container_icones{
        padding-left: 70%;
        position: absolute; /*les boutons sont placés au dessus de v-card media en
        les mettant en absolute la div ne prend pas d'espace'*/
        z-index: 1000; /*permet de cliquer sur les boutons*/
        display: flex;
        flex-direction: column !important;
    }

>>>>>>> 5ec9caa736bd9df6692a7ce597bb0db7bcd154e6

/*couleur de fond pour chaque collection
    selon le document sur le drive (sharepoint/docs/pantone&policy)
    https://drive.google.com/drive/folders/1up_xhP11L64vZTDStzCjKSOppzEfP-bO
    */
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