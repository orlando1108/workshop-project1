<template> <!--container du template qui va être appelé-->
<v-app> <!--container de l'application c'est nécessaire d'en avoir un -->
    <v-form v-model="valid" ref="form" lazy-validation> <!--container du formulaire-->
        <v-container>
           <v-flex><h1>Nos collections</h1></v-flex>
            <v-layout row wrap>
                <v-flex xl2 lg3 md4 sm6 xs12 v-for="card in cards">
                    <v-card>
                        <v-card-media :src="card.path" height="200px" :contain="true">
                            <v-flex class="container_icones">
                                <v-card-media src="/static/icones/add.png" height="50px" :contain="true"></v-card-media>
                                <v-card-media src="/static/icones/readmore.png" height="50px" :contain="true"></v-card-media>
                            </v-flex>
                        </v-card-media>
                        <v-card-title primary-title :id="card.title" class='white--text'>
                                <h3 class="headline mb-0">{{ card.title }}</h3>
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
                    title: 'Black & White',
                    name_model:"includeFiles",
                    color:"#000000"
                },
                {
                    path: '/static/collections/extrapur.png',
                    title: 'Extra Pur',
                    color:"62B5E5"
                },
                {
                    path: '/static/collections/groomingformen.png',
                    title: 'Grooming For Men',
                    color:"62B5E5"
                },
                {
                    path: '/static/collections/karite.jpg',
                    title: 'Karite',
                    color:"62B5E5"
                },
                {
                    path: '/static/collections/maison_home.png',
                    title: 'Maison Home',
                    color:"62B5E5"
                },
                {
                    path: '/static/collections/vo.png',
                    title: 'Version Originale',
                    color:"62B5E5"
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
            includeFiles: false,
            enabled: false
        })
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
        padding-top:5px;
        padding-left:75%;
    }
    /*couleur de fond pour chaque collection
    selon le document sur le drive (sharepoint/docs/pantone&policy)
    https://drive.google.com/drive/folders/1up_xhP11L64vZTDStzCjKSOppzEfP-bO
    */
    div[id="Black & White"]{
        background-color:#231F20;
    }
    div[id="Extra Pur"]{
        background-color:#CFD1CE;
    }
    div[id="Grooming For Men"]{
        background-color:#357AA1;
    }
    div[id="Karite"]{
        background-color:#d9c89e;
    }
    div[id="Maison Home"]{
        background-color:#53C1B6;
    }
    div[id="Version Originale"]{
        background-color:#5B5E5F;
    }
</style>