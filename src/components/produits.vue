<template> <!--container du template qui va être appelé-->

<v-app> <!--container de l'application c'est nécessaire d'en avoir un -->
    <v-container container_body>
        <h1 id="top_page">Products List</h1>
        <v-layout row wrap layout_cards_products>
            <v-flex xl3 lg4 md4 sm6 xs12 v-for="(product,index) in products" :id="product.nom" :key="product.id"> <!--la div contenant chaque collection a pour id le nom de sa collection-->
                <v-card class="infos_cards" v-if= "product.showInfo">
                   <div class="container_for_scrollbar">
                    <h3 class="pt-3"><span>{{product.name}}</span><br>Description</h3>
                    <v-flex mt-3>
                        <p>{{product.description}}</p>
                        <h3 class="pt-3">Composition</h3>
                        <br><p>{{product.composition}}</p>
                    </v-flex>
                    <v-btn color="blue darken-1" flat  @click="hideDetail(index)">Close</v-btn>
                    </div>
                </v-card>
                <v-card v-else>
                <v-card-media :src="product.img_path" height="250px" :contain="true">
                    <v-flex class="container_icones"> <!--les images ont un espace blanc a droite 
                       et a gauche on comble cette espace par des boutons-->
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
               </v-card-media>
                    <v-card-title primary-title class='white--text' @click="showDetail(index)">
                        <h3 class="headline mb-0">{{ product.name }}</h3>
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
<script type="text/javascript">
</script>
<script>
import axios from 'axios';
import store from "../store.js";
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
        mounted(){
            this.onScroll();
            if(this.$route.query.idCollection !== this.products.length){
                this.getProducts_inCollection(this.$route.query.idCollection);
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
            ...Vuex.mapGetters(['products']),
        },
        methods: {
            ...Vuex.mapActions({
                    onScroll () {
                    if (typeof window === 'undefined') return
                    const top = window.pageYOffset ||
                        document.documentElement.offsetTop || 0
                    this.fab = top >20 /*a partir de combien de px de scroll en hauteur le bouton retour vers le haut apparait*/
                    },
                        addProduct_inStore: 'addProduct',
                        deleteProduct_fromStore: 'deleteProduct',
                        getProducts_inCollection: 'fetchProducts',
                        showDetail: 'showProductDetail',
                        hideDetail: 'hideProductDetail',
                        clearProducts: 'clearProducts'}),
                        onScroll () {
                        if (typeof window === 'undefined') return
                        const top = window.pageYOffset ||
                        document.documentElement.offsetTop || 0
                        this.fab = top >100 /*a partir de combien de px de scroll en hauteur le bouton retour vers le haut apparait*/
                    },
            toTop () {
                this.$router.push({ hash: '' })
                window.scrollTo(0, 0)
            }
            
        },
        beforeRouteLeave (to, from, next) {
                this.clearProducts();
    next();
  }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>