<template> <!--container du template qui va être appelé-->

<v-app> <!--container de l'application c'est nécessaire d'en avoir un -->
    <v-container>
        <h1>Liste produits</h1>
        <v-layout row wrap>
            <v-flex xl3 lg4 md4 sm6 xs12 v-for="(product,index) in fetchProductResults" :id="product.nom"> <!--la div contenant chaque collection a pour id le nom de sa collection-->
                <v-card class="infos_cards" v-if="product.showinfo">
                    <h3 class="pt-3">{{ product.nom }}</h3>
                    <v-flex mt-3>
                        <p>{{product.description}}</p>
                        <p>Composition<br>{{product.composition}}</p>
                    </v-flex>
                    <v-btn color="blue darken-1" flat  @click="news_products_close(product.nom,index)">Close</v-btn>
                </v-card>
                <v-card v-else>
                    <v-flex class="container_icones">
                        <v-btn fab dark medium color="pink" class="btn_cancel" v-if= "product.select">
                            <v-icon dark>favorite</v-icon>
                        </v-btn>
                        <v-btn fab dark medium color="indigo" class="btn_add" v-else> <!--quand on clique on appelle ma function qui a pour argument le titre de la collection et l'index qui sert a changer l'etat d'une propriété-->
                            <v-icon dark>add</v-icon>
                        </v-btn>
                        <v-btn fab medium dark color="teal">
                            <v-icon>info</v-icon>
                        </v-btn>
                </v-flex>
                    <v-card-media :src="product.img_path" height="250px" :contain="true">
                    </v-card-media>
                    <v-card-title primary-title class='white--text' @click="news_products_open(product.nom,index)">
                        <h3 class="headline mb-0">{{ product.nom }}</h3>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</v-app>
</template>
<script type="text/javascript">
</script>
<script>
import axios from 'axios';
    export default {
        mounted(){
              //  console.log("query  "+)
                this.fetchProducts_inCollection(this.$route.query.idCollection);

            },
        data: () => ({
            fetchProductResults: [],
            query: "http://app-c45740da-9596-48ce-ad11-aa12b48f2082.cleverapps.io/api/produits/",
            name_url:new URL(window.location.href).pathname.replace('/produits/',''),
            //recupere l'id dans l'url en supprimant /produits/ de la chaine de caracteres (etant le path soit /produits/1) affichant l'url
        }),
        // Définissez les méthodes de l'objet
        methods: {
            fetchProducts_inCollection(idCollection){
                axios.get(this.query.concat(idCollection), { headers: { 'Access-Control-Allow-Origin': true,
                                                                        'Content-Type': 'application/json' }})
                     .then(response => {
                        this.fetchProductResults = response.data.Produits;
                        console.log("DATA   " + JSON.stringify(this.fetchProductResults))
                         })
                    .catch(error => console.error(error));

            },
//            add_products: function (name,index) {
//                console.log(name) 
//                this.cards[index].select = true 
//            },
//            delete_products: function (name,index) {
//                console.log(name)
//                this.cards[index].select = false
//            },
//            news_products_open: function (name,index){
//                console.log(name)
//                this.cards[index].showinfo = true
//            },
//            news_products_close: function (name,index){
//                console.log(name)
//                this.cards[index].showinfo = false
//            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
        height:350px !important; /*300px img + 100px titre*/
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
    /*container icones*/
    div.container_icones{
        padding-left: 70%;
        position: absolute; /*les boutons sont placés au dessus de v-card media en
        les mettant en absolute la div ne prend pas d'espace'*/
        z-index: 1000; /*permet de cliquer sur les boutons*/
        display: flex;
        flex-direction: column !important;
    }
</style>