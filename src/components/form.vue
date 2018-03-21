<template>
<v-app>
<v-form v-model="valid">

   <v-container>
    <v-layout>
        <v-flex lg6 md6 xs12>
            <v-card-media src="https://vuetifyjs.com/static/doc-images/cards/desert.jpg" height="200px"></v-card-media>
        </v-flex>
        <v-flex offset-md-2 lg6 md6 xs12>
            <v-card-media src="https://vuetifyjs.com/static/doc-images/cards/desert.jpg" height="200px"></v-card-media>
        </v-flex>
    </v-layout>
    </v-container>
    <v-container>
    <v-layout row wrap>
    <v-flex lg6 md6 xs12>
    <v-text-field
                  label="Name"
                  v-model="name"
                  :rules="nameRules"
                  required
                  ></v-text-field>
    </v-flex>
    <v-flex lg6 md6 xs12>
    <v-text-field
                  label="E-mail"
                  v-model="email"
                  :rules="emailRules"
                  required
                  ></v-text-field>
    </v-flex>
    </v-layout>
    </v-container>
    
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 md6>
                <v-card>
                    <v-card-media src="https://vuetifyjs.com/static/doc-images/cards/desert.jpg" height="200px">
    </v-card-media>
                    <v-card-title primary-title class='error white--text'>
                        <div>
                            <h3 class="headline mb-0">Produit1</h3>
                            <div></div>
    </div>
    </v-card-title>
                    <v-card-actions>
                        <v-btn flat color="orange">Share</v-btn>
                        <v-btn flat color="orange">Explore</v-btn>
    </v-card-actions>
    </v-card>
    </v-flex>
            <v-flex xs12 md6>
                <v-card>
                    <v-card-media src="https://vuetifyjs.com/static/doc-images/cards/desert.jpg" height="200px">
    </v-card-media>
                    <v-card-title primary-title class='error white--text'>
                        <div>
                            <h3 class="headline mb-0">Produit2</h3>
                            <div></div>
    </div>
    </v-card-title>
                    <v-card-actions>
                        <v-btn flat color="orange">Share</v-btn>
                        <v-btn flat color="orange">Explore</v-btn>
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
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    img.img_header{
        width:45vh;
        height: 100%;
        margin:15px 15px;
    }
    div.img_header{
        width:100px;
        height: 100%;
        margin:15px 15px;
    }
</style>