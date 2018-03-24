<template> <!--container du template qui va être appelé-->
<v-app> <!--container de l'application c'est nécessaire d'en avoir un -->
    <v-form v-model="valid" ref="form" lazy-validation> <!--container du formulaire-->
        <v-container>
            <v-flex>
                <h1>Liste des produits</h1>
            </v-flex>
            <v-layout row wrap>
                <v-flex xl2 lg3 md4 sm6 xs12 v-for="card in cards">
                    <v-card>
                        <v-card-media :src="card.path" height="200px" :contain="true">
                            <v-flex class="container_icones">
                                <v-btn fab dark medium color="indigo" class="btn_add" 
                                       @click="add_products(card.name)"> <!--quand on clique on appelle ma function qui a pour argument le titre de la collection-->
                                    <v-icon dark>add</v-icon>
                                </v-btn>
                                <v-btn fab dark medium color="pink" class="btn_cancel" @click="delete_products(card.name)">
                                    <v-icon dark>favorite</v-icon>
                                </v-btn>
                            </v-flex>
                        </v-card-media>
                        <v-card-title primary-title :class='card.collection'>
                            <h3 class="headline mb-0">{{ card.name }}</h3>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-form>
</v-app>

</template>
<script>
    export default {
        data: () => ({
            cards: [
                {
                    path: '/static/produits/blackandwhite/black-white-hand-cream-black-tea.jpg',
                    collection: 'Black & White',
                    name:'Hand cream black tea'
                },
                {
                    path: '/static/produits/blackandwhite/black-white-hand-cream-white-tea.jpg',
                    collection: 'Black & White',
                    name:'Hand cream white tea'
                },
                {
                    path: '/static/produits/blackandwhite/black-white-liquid-marseille-soap-black-tea.jpg',
                    collection: 'Black & White',
                    name:'Liquid marseille black tea'
                },
                {
                    path: '/static/produits/blackandwhite/black-white-liquid-marseille-soap-white-tea.jpg',
                    collection: 'Black & White',
                    name:'Liquid marseille white tea'
                },
                {
                    path: '/static/produits/blackandwhite/black-white-scented-candle-black.jpg',
                    collection: 'Black & White',
                    name:'Scented Candle black'
                },
                {
                    path: '/static/produits/blackandwhite/black-white-scented-candle-white.jpg',
                    collection: 'Black & White',
                    name:'Scented Candle white'
                },
            ],
        }),
        // Définissez les méthodes de l'objet
        methods: {
            add_products: function (name) { //ma fonction mettre l'argument recupere ici le titre entre paranthese
                //on selectionne le bouton add de la div avec pour id la valeur dans la variable titre
                document.querySelector("div[id='"+name+"'] .btn_add").style.display="none",
                    document.querySelector("div[id='"+name+"'] .btn_cancel").style.display="block";
                console.log(title);
            },
            delete_products: function (name) {
                document.querySelector("div[id='"+name+"'] .btn_add").style.display="block",
                    document.querySelector("div[id='"+name+"'] .btn_cancel").style.display="none";
                console.log(title);
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
    /*container en bas de l'img*/
    div.card__title{
        display: flex;
        justify-content: center;
        align-items: center;
        height:100px;
        color: white !important;
        background-color:#607D8B;
    }
    /*btn cancel pas afficher par défaut*/
    button[class^="btn_cancel"]{
        display: none;
    }
    /*container icones*/
    div.container_icones{
        padding-top:5px;
        padding-left:70%;
    }
</style>