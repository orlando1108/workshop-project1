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
                    <v-card-media :src="product.img_path" height="250px" :contain="true">
                        <v-container class="container_icones">
                            <v-btn fab dark medium color="pink" class="btn_cancel" @click="delete_products(product.nom,index)" v-if= "product.select">
                                <v-icon dark>favorite</v-icon>
                             </v-btn>
                            <v-btn fab dark medium color="indigo" class="btn_add" @click="add_products(product.nom,index)" v-else>
                                <v-icon dark>add</v-icon>
                            </v-btn>
                            <v-btn fab dark color="teal" @click="news_products_open(product.nom,index)">
                                <v-icon>info</v-icon>
                           </v-btn>
                        </v-container>
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
            cards: [
                {
                    path: '/static/produits/blackandwhite/black-white-hand-cream-black-tea.jpg',
                    collection: 'Black & White',
                    name:'Hand cream black tea',
                    description:"Enriched with shea butter, olive oil and vitamin E, this cream takes care of your hands. Its light and non greasy texture is quickly absorbed and leaves the skin soft, comfortable and gently perfumed.Presented in a lacquered glass pump-bottle with a timeless and contemporary design which uses the strength of contrast to create an inspiring graphic universe.",
                    composition:"Shea butter, Olive oil and Vitamin E.",
                    select:false,
                    showinfo:false,
                    id:1
                },
                {
                    path: '/static/produits/blackandwhite/black-white-hand-cream-white-tea.jpg',
                    collection: 'Black & White',
                    name:'Hand cream white tea',
                    description:"Enriched with shea butter, olive oil and vitamin E, this cream takes care of your hands. Its light and non greasy texture is quickly absorbed and leaves the skin soft, comfortable and gently perfumed.Presented in a lacquered glass pump-bottle with a timeless and contemporary design which uses the strength of contrast to create an inspiring graphic universe.",
                    composition:"Shea butter, Olive oil and Vitamin E.",
                    select:false,
                    showinfo:false,
                    id:1
                },
                {
                    path: '/static/produits/blackandwhite/black-white-liquid-marseille-soap-black-tea.jpg',
                    collection: 'Black & White',
                    name:'Liquid marseille black tea',
                    description:"Made in a cauldron according to tradition, as does its ancestor, the authentic cube from Marseille, this liquid soap is elaborated with vegetable oils.Naturally glycerined, it gently cleanses the skin.Presented in a lacquered glass pump-bottle with a timeless and contemporary design which uses the strength of contrast to create an inspiring graphic universe.",
                    composition:"Natural foaming coconut oil.No colorants, no animal fats.",
                    select:false,
                    showinfo:false,
                    id:1
                },
                {
                    path: '/static/produits/blackandwhite/black-white-liquid-marseille-soap-white-tea.jpg',
                    collection: 'Black & White',
                    name:'Liquid marseille white tea',
                    description:"Made in a cauldron according to tradition, as does its ancestor, the authentic cube from Marseille, this liquid soap is elaborated with vegetable oils.Naturally glycerined, it gently cleanses the skin.Presented in a lacquered glass pump-bottle with a timeless and contemporary design which uses the strength of contrast to create an inspiring graphic universe.",
                    composition:"Natural foaming coconut oil.No colorants, no animal fats.",
                    select:false,
                    showinfo:false,
                    id:1
                },
                {
                    path: '/static/produits/blackandwhite/black-white-scented-candle-black.jpg',
                    collection: 'Black & White',
                    name:'Scented Candle black',
                    description:"True decorative object, this scented candle will bring a touch of contemporary elegance and light to your home. Its cotton wick and blend of mineral and vegetable waxes allow an optimum diffusion of the fragrance. Presented in a lacquered glass, its timeless and contemporary design uses the strength of contrast to create an inspiring graphic universe.",
                    composition:"Blend of mineral and vegetable waxes. Fragrance. Cotton wick.",
                    select:false,
                    showinfo:false,
                    id:1
                },
                {
                    path: '/static/produits/blackandwhite/black-white-scented-candle-white.jpg',
                    collection: 'Black & White',
                    name:'Scented Candle white',
                    description:"True decorative object, this scented candle will bring a touch of contemporary elegance and light to your home. Its cotton wick and blend of mineral and vegetable waxes allow an optimum diffusion of the fragrance. Presented in a lacquered glass, its timeless and contemporary design uses the strength of contrast to create an inspiring graphic universe.",
                    composition:"Blend of mineral and vegetable waxes. Fragrance. Cotton wick.",
                    select:false,
                    showinfo:false,
                    id:1
                },
            ],
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
            add_products: function (name,index) { //ma fonction mettre l'argument recupere ici le titre entre paranthese
                console.log(name) //affiche le titre de la collection*/
                this.cards[index].select = true //change a la valeur de select (pour savoir si une carte est selectionnée) à true
            },
            delete_products: function (name,index) {
                console.log(name)
                this.cards[index].select = false
            },
            news_products_open: function (name,index){
                console.log(name)
                this.cards[index].showinfo = true
            },
            news_products_close: function (name,index){
                console.log(name)
                this.cards[index].showinfo = false
            }
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
        padding-top:5px;
        padding-left:70%;
    }
</style>