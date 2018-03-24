<template> <!--container du template qui va être appelé-->

<v-app> <!--container de l'application c'est nécessaire d'en avoir un -->
    <v-container>
    <h1>Nos collections</h1>
        <v-layout row wrap>
            <v-flex xl2 lg3 md4 sm6 xs12 v-for="(card,index) in cards" :id="card.name"> <!--la div contenant chaque collection a pour id le nom de sa collection-->
                <v-card>
                    <v-container class="container_icones">
                        <v-btn fab dark medium color="pink" class="btn_cancel" @click="delete_products(card.name,index)" v-if= "card.select">
                            <v-icon dark>favorite</v-icon>
                        </v-btn>
                        <v-btn fab dark medium color="indigo" class="btn_add" @click="add_products(card.name,index)" v-else> <!--quand on clique on appelle ma function qui a pour argument le titre de la collection et l'index qui sert a changer l'etat d'une propriété-->
                            <v-icon dark>add</v-icon>
                        </v-btn>
                    </v-container>
                    <router-link :to="{name: 'Produits', params: {id:1}}">
                        <v-card-media :src="card.path" height="200px" :contain="true"></v-card-media>
                        <v-card-title primary-title class='white--text'>
                            <h3 class="headline mb-0">{{ card.name }}</h3>
                        </v-card-title>
                    </router-link>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</v-app>

</template>

<script>
    export default {
        data: () => ({
            cards: [
                {
                    path: '/static/collections/blackwhite.png',
                    name: 'Black & White',
                    select:false
                },
                {
                    path: '/static/collections/extrapur.png',
                    name: 'Extra Pur',
                    select:false
                },
                {
                    path: '/static/collections/groomingformen.png',
                    name: 'Grooming For Men',
                    select:false
                },
                {
                    path: '/static/collections/karite.jpg',
                    name: 'Karite',
                    select:false
                },
                {
                    path: '/static/collections/maison_home.png',
                    name: 'Maison Home',
                    select:false
                },
                {
                    path: '/static/collections/vo.png',
                    name: 'Version Originale',
                    select:false
                },
            ],
        }),
        // Définissez les méthodes de l'objet
        methods: {
            add_products: function (name,index) { //ma fonction mettre l'argument recupere ici le titre entre paranthese
                console.log(name) //affiche le titre de la collection*/
                this.cards[index].select = true //change a la valeur de select (pour savoir si une carte est selectionnée) à true
            },
            delete_products: function (name,index) {
                console.log(name)
                this.cards[index].select = false
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
    }
    /*container icones*/
    div.container_icones{
        padding-left:75%;
    }
    /*couleur de fond pour chaque collection
    selon le document sur le drive (sharepoint/docs/pantone&policy)
    https://drive.google.com/drive/folders/1up_xhP11L64vZTDStzCjKSOppzEfP-bO
    */
    div[id="Black & White"] div.card__title{ /*selection de la div contenant le titre enfant de la div qui a pour id black & white*/
        background-color:#231F20;
    }
    div[id="Extra Pur"] div.card__title{
        background-color:#CFD1CE;
    }
    div[id="Grooming For Men"] div.card__title{
        background-color:#357AA1;
    }
    div[id="Karite"] div.card__title{
        background-color:#d9c89e;
    }
    div[id="Maison Home"] div.card__title{
        background-color:#53C1B6;
    }
    div[id="Version Originale"] div.card__title{
        background-color:#5B5E5F;
    }
</style>