<template> <!--container du template qui va être appelé-->
<v-app> <!--container de l'application c'est nécessaire d'en avoir un -->
    <v-form v-model="valid" ref="form" lazy-validation> <!--container du formulaire-->
        <v-container>
            <v-flex>
                <h1>Hand Cream Black Tea</h1>
            </v-flex>
            <v-layout row wrap>
                <v-flex xl2 lg3 md4 sm6 xs12 v-for="card in cards">
                    <v-card>
                        <v-card-media :src="card.path" height="200px" :contain="true">
                            <v-flex class="container_icones">
                            </v-flex>
                        </v-card-media>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-form>
</v-app>

</template>
<script>
    function add_collections(){
        alert('ceci est un test');
    }
</script>
<script>
    export default {
        data: () => ({
            cards: [
                {
                    path: '/static/produits/blackandwhite/black-white-hand-cream-black-tea.jpg',
                    collection: 'Black & White',
                    color:'black',
                    name:'Hand cream black tea'
                },
            ],
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
        height:100px;
    }
    /*container icones*/
    div.container_icones{
        padding-top:5px;
        padding-left:70%;
    }
    /*couleur de fond pour chaque collection
    selon le document sur le drive (sharepoint/docs/pantone&policy)
    https://drive.google.com/drive/folders/1up_xhP11L64vZTDStzCjKSOppzEfP-bO
    */
    div.card__title.black{
        background-color:#231F20;
        color: white !important;
    }
    div.card__title.white{
        background-color:#ffffff;
        color: black !important;
    }
</style>