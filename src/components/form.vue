<template> <!--container du template qui va être appelé-->
<v-app> <!--container de l'application c'est nécessaire d'en avoir un -->
    <v-form v-model="valid" ref="form" lazy-validation> <!--container du formulaire-->
        <v-container> 
            <v-layout row wrap>
                <v-flex xs12 md6 v-for="logo in logos"> <!-- tant qu'il y a des objets logos on affiche la div avec les valeurs correspondant à l'objet ac-->
                    <v-card>
                        <v-card-media src="https://vuetifyjs.com/static/doc-images/cards/desert.jpg" height="200px"></v-card-media>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        
        <v-container>
            <v-layout row wrap>
                <v-flex lg6 md6 xs12 v-for="input in inputs">
                    <v-text-field
                    label="Name"
                    v-model="name"
                    :rules="nameRules"
                    required
                    >
                    </v-text-field>
                </v-flex>
            </v-layout>
        </v-container>

        <v-container>
            <v-layout row wrap>
                <v-flex xs12 md6 v-for="card in cards">
                    <v-card>
                        <v-card-media src="https://vuetifyjs.com/static/doc-images/cards/desert.jpg" height="200px">
                        </v-card-media>
                        <v-card-title primary-title class='error white--text'>
                            <div>
                                <h3 class="headline mb-0 text-center">{{ card.title }}</h3>
                            </div>
                        </v-card-title>
                            <v-card-actions>
                                <v-checkbox v-model="includeFiles" label="i'm interested"></v-checkbox>
                            </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-form>
</v-app>

</template>
<script>
    export default {
        name: 'form',
        $_veeValidate: {
            validator: 'new'
        },
        data: () => ({
            logos: [
                {
                    path: 'https://vuetifyjs.com/static/doc-images/cards/sunshine.jpg',
                    title: 'Città'
                },
                {
                    path: 'https://vuetifyjs.com/static/doc-images/cards/sunshine.jpg',
                    title: 'Compagnie de provence'
                }
            ],
            cards: [
                {
                    path: 'https://vuetifyjs.com/static/doc-images/cards/desert.jpg',
                    title: 'Collection1'
                },
                {
                    path: 'https://vuetifyjs.com/static/doc-images/cards/sunshine.jpg',
                    title: 'Collection2'
                }
            ],
            inputs: [
                {
                    name_label:"Name",
                    name_model:"name",
                    name_label:"nameRules"
                },
                {
                    name_label:"E-mail",
                    name_model:"email",
                    name_label:"emailRules"
                }
            ],
            includeFiles: false,
            enabled: false
        })
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /*container d'un produit*/
    div.card{
        margin:3% 3%; /*top/bottom right/left*/
    }
    div.card img{
       
    }
</style>