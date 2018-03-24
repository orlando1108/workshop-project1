<template> <!--container du template qui va être appelé-->

<v-app> <!--container de l'application c'est nécessaire d'en avoir un -->
    <v-form v-model="valid" ref="form" lazy-validation> <!--container du formulaire-->
        <v-container>
            <v-flex>
                <h1>Nos collections</h1>
            </v-flex>
            <v-layout row wrap>
                <v-flex xl2 lg3 md4 sm6 xs12 v-for="card in cards" :id="card.title"> <!--la div contenant chaque collection a pour id le nom de sa collection-->
                    <v-card>
                        <v-container class="container_icones">
                            <v-btn fab dark medium color="indigo" class="btn_add" 
                            @click="add_products(card.title)"> <!--quand on clique on appelle ma function qui a pour argument le titre de la collection-->
                                <v-icon dark>add</v-icon>
                            </v-btn>
                            <v-btn fab dark medium color="pink" class="btn_cancel" @click="delete_products(card.title)">
                                <v-icon dark>favorite</v-icon>
                            </v-btn>
                        </v-container>
                            
                        <router-link :to="{name: 'Produits', params: {id:1}}">
                        <v-card-media :src="card.path" height="200px" :contain="true">
                            
                            </v-card-media>
                       
                        <v-card-title primary-title class='white--text'>
                                <h3 class="headline mb-0">{{ card.title }}</h3>
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
    export default {
        data: () => ({
            logos: [
                {
                    path: '/static/logos/citta.jpg',
                    title: 'Città'
                },
                {
                    path: '/static/logos/cdp.png',
                    title: 'Compagnie de provence'
                }
            ],
            cards: [
                {
                    path: '/static/collections/blackwhite.png',
                    title: 'Black & White'
                },
                {
                    path: '/static/collections/extrapur.png',
                    title: 'Extra Pur'
                },
                {
                    path: '/static/collections/groomingformen.png',
                    title: 'Grooming For Men'
                },
                {
                    path: '/static/collections/karite.jpg',
                    title: 'Karite'
                },
                {
                    path: '/static/collections/maison_home.png',
                    title: 'Maison Home'
                },
                {
                    path: '/static/collections/vo.png',
                    title: 'Version Originale'
                },
            ],
            inputs: [
                {
                    name_label:"Nom entreprise",
                    name_model:"name",
                    name_rules:"nameRules"
                },
                {
                    name_label:"E-mail entreprise",
                    name_model:"email",
                    name_rules:"emailRules"
                }
            ],
        }),
        // Définissez les méthodes de l'objet
        methods: {
            add_products: function (title) { //ma fonction mettre l'argument recupere ici le titre entre paranthese
                //on selectionne le bouton add de la div avec pour id la valeur dans la variable titre
                document.querySelector("div[id='"+title+"'] .btn_add").style.display="none";
                document.querySelector("div[id='"+title+"'] .btn_cancel").style.display="block";
                console.log(title);
                title="test";
            },
            delete_products: function (title) {
                document.querySelector("div[id='"+title+"'] .btn_add").style.display="block";
                document.querySelector("div[id='"+title+"'] .btn_cancel").style.display="none";
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
    }
    /*container icones*/
    div.container_icones{
        padding-left:75%;
    }
    /*btn cancel pas afficher par défaut*/
    button[class^="btn_cancel"]{
        display: none;
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