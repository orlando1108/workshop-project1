<template> <!--container du template qui va être appelé-->

<v-app> <!--container de l'application c'est nécessaire d'en avoir un -->
    <v-container>
        <h1>Liste produits</h1>
        <v-layout row wrap>
            <v-flex xl3 lg4 md4 sm6 xs12 v-for="(product,index) in products" :id="product.nom" :key="product.id"> <!--la div contenant chaque collection a pour id le nom de sa collection-->
                <v-card class="infos_cards" v-if= "product.showInfo">
                    <h3 class="pt-3">Description</h3>
                    <v-flex mt-3>
                        <p>{{product.description}}</p>
                        <h3 class="pt-3">Composition</h3>
                        <br><p>{{product.composition}}</p>
                    </v-flex>
                    <v-btn color="blue darken-1" flat  @click="hideDetail(index)">Close</v-btn>
                </v-card>
                <v-card v-else>
                    <v-flex class="container_icones">
                        <v-btn fab dark medium color="pink" class="btn_cancel" v-if= "product.selected" @click="deleteProduct_fromStore({id:product.id,index:index})">
                            <v-icon dark>favorite</v-icon>
                        </v-btn>
                        <v-btn fab dark medium color="indigo" class="btn_add" v-else @click="addProduct_inStore({id:product.id,index:index})"> <!--quand on clique on appelle ma function qui a pour argument le titre de la collection et l'index qui sert a changer l'etat d'une propriété-->
                            <v-icon dark>add</v-icon>
                        </v-btn>
                        <v-btn fab medium dark color="teal" @click="showDetail(index)">
                            <v-icon>info</v-icon>
                        </v-btn>
                </v-flex>
                    <v-card-media :src="product.img_path" height="250px" :contain="true">
                       <!-- <v-container class="container_icones">
                            <v-btn fab dark medium color="pink" class="btn_cancel" @click="deleteProduct(product.id,index)" v-if= "product.selected">
                                <v-icon dark>favorite</v-icon>
                             </v-btn>
                            <v-btn fab dark medium color="indigo" class="btn_add" @click="addProduct(product.id,index)" v-else>
                                <v-icon dark>add</v-icon>
                            </v-btn>
                            <v-btn fab dark color="teal" @click="showDetail(product.name,index)">
                                <v-icon>info</v-icon>
                           </v-btn>
                        </v-container>-->
               </v-card-media>
                    <v-card-title primary-title class='white--text' @click="showDetail(index)">
                        <h3 class="headline mb-0">{{ product.name }}</h3>
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
import store from "../store.js";
import Vuex from 'vuex'

    export default {
        store: store,
        mounted(){
            if(!this.products.length){
                this.getProducts_inCollection(this.$route.query.idCollection);
            }
            },
        computed:{
            ...Vuex.mapGetters(['products']),
        },
        methods: {
            ...Vuex.mapActions({
                        addProduct_inStore: 'addProduct',
                        deleteProduct_fromStore: 'deleteProduct',
                        getProducts_inCollection: 'fetchProducts',
                        showDetail: 'showProductDetail',
                        hideDetail: 'hideProductDetail'}),
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
        padding: 0px 10px 0px 10px
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