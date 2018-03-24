<template> <!--container du template qui va être appelé-->

<v-app> <!--container de l'application c'est nécessaire d'en avoir un -->
    <v-form v-model="valid" ref="form" lazy-validation> <!--container du formulaire-->
        <v-container>
            <v-flex>
                <h1>Nos collections</h1>


            </v-flex>
            <v-layout row wrap>
                <v-flex xl2 lg3 md4 sm6 xs12 v-for="collection in fetchCollectionResults" :key="collection.id">
                    <v-card>
                        <v-container class="container_icones">
                            <v-btn fab dark medium color="indigo" class="btn_add" 
                               v-on:click="add_products">
                                <v-icon dark>add</v-icon>
                            </v-btn>
                            <v-btn fab dark medium color="pink" class="btn_cancel" v-on:click="delete_products">
                                <v-icon dark>favorite</v-icon>
                            </v-btn>
                        </v-container>
                            
                        <router-link :to="{name: 'Produits', params: {id_collection:collection.id}}">
                        <v-card-media :src="collection.img_path" height="200px" :contain="true">
                            
                            </v-card-media>
                       
                        <v-card-title primary-title :id="collection.nom" class='white--text'>
                                <h3 class="headline mb-0">{{ collection.nom }}</h3>
                        </v-card-title>
                        </router-link>
                    </v-card>
                    
                </v-flex>
            </v-layout>
        </v-container>
    </v-form>
</v-app>

</template>

<script>
import axios from 'axios';
export default {
  
  mounted () {
    this.fetchCollections();
  },

  data: () => ({
    fetchCollectionResults: [],
    query: "http://localhost:3000/api/collections",

    name: "Typeahead",
    valid: "",

    props: {
      source: {
        type: [String, Array],
        required: false
      }
    },
    logos: [
      {
        path: "/static/logos/citta.jpg",
        title: "Città"
      },
      {
        path: "/static/logos/cdp.png",
        title: "Compagnie de provence"
      }
    ],
    cards: [
      {
        path: "/static/collections/blackwhite.png",
        title: "Black & White"
      },
      {
        path: "/static/collections/extrapur.png",
        title: "Extra Pur"
      },
      {
        path: "/static/collections/groomingformen.png",
        title: "Grooming For Men"
      },
      {
        path: "/static/collections/karite.jpg",
        title: "Karite"
      },
      {
        path: "/static/collections/maison_home.png",
        title: "Maison Home"
      },
      {
        path: "/static/collections/vo.png",
        title: "Version Originale"
      }
    ],
    inputs: [
      {
        name_label: "Nom entreprise",
        name_model: "name",
        name_rules: "nameRules"
      },
      {
        name_label: "E-mail entreprise",
        name_model: "email",
        name_rules: "emailRules"
      }
    ]
  }),
  computed: {
    createCollection() {
      let posts = this.fetchCollectionResults;
  // Définissez les méthodes de l'objet
    }
  },
  methods: {
    add_products: function(event) {
      // `this` fait référence à l'instance de Vue à l'intérieur de `methods`
      (document.querySelector(".btn_add").style.display = "none"),
        (document.querySelector(".btn_cancel").style.display = "block");
    },
    delete_products: function(event) {
      // `this` fait référence à l'instance de Vue à l'intérieur de `methods`
      (document.querySelector(".btn_add").style.display = "block"),
        (document.querySelector(".btn_cancel").style.display = "none");
    },
    fetchCollections() {
     
        axios.get(this.query, { headers: { 'Access-Control-Allow-Origin': true,
                                           'Content-Type': 'application/json' }})
          .then(response => {
            //let data = JSON.parse(response);
                this.fetchCollectionResults = response.data.Collections;
              //  console.log("DATA   " + JSON.stringify(this.fetchCollectionResults.data.Collections))
                         })
          .catch(error => console.error(error));
    }
  }
}


</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*espace entre les champs du formulaire*/
div.container_input {
  margin: 1% 1%;
}
/*espace entre les div des collections*/
div.card {
  margin: 3% 3%; /*top/bottom right/left*/
}
/*container en bas de l'img*/
div.card__title {
  display: flex;
  justify-content: center;
  align-items: center;
}
/*container icones*/
div.container_icones {
  padding-left: 75%;
}
/*btn cancel pas afficher par défaut*/
button[class^="btn_cancel"] {
  display: none;
}

/*couleur de fond pour chaque collection
    selon le document sur le drive (sharepoint/docs/pantone&policy)
    https://drive.google.com/drive/folders/1up_xhP11L64vZTDStzCjKSOppzEfP-bO
    */
div[id="BLACK & WHITE"] {
  background-color: #231f20;
}
div[id="EXTRA PUR"] {
  background-color: #cfd1ce;
}
div[id="GROOMING FOR MEN"] {
  background-color: #357aa1;
}
div[id="KARITE"] {
  background-color: #d9c89e;
}
div[id="MAISON"] {
  background-color: #53c1b6;
}
div[id="TERRA"] {
  background-color: #cfd1ce;
}
div[id="COLOGNE"] {
  background-color: #357aa1;
}
div[id="VERSION ORIGINALE"] {
  background-color: #d9c89e;
}
div[id="BASTIDE"] {
  background-color: #53c1b6;
}
div[id="MUCEM X COMPAGNIE DE PROVENCE"] {
  background-color: #5b5e5f;
}
</style>