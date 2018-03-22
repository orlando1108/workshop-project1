<template> <!--container du template qui va être appelé-->
<v-app> <!--container de l'application c'est nécessaire d'en avoir un -->
    <v-form v-model="valid" ref="form" lazy-validation> <!--container du formulaire-->
        <v-container> 
            <v-layout row wrap>
                <v-flex xs12 md6 v-for="logo in logos"> <!-- tant qu'il y a des objets logos on affiche la div avec les valeurs correspondant à l'objet ac-->
                    <v-card>
                        <v-card-media :src="logo.path" height="300px" :contain="true"></v-card-media>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        
        <v-container>
            <v-layout row wrap>
                <v-flex lg6 md6 xs12 v-for="input in inputs">
                    <v-text-field
                    :label="input.name_label"
                    :v-model="input.name_model"
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
                        <v-card-media :src="card.path" height="300px" :contain="true"></v-card-media>
                        <v-card-title primary-title class='error white--text text-md-center'>
                            <div>
                                <h3 class="headline mb-0">{{ card.title }}</h3>
                            </div>
                        </v-card-title>
                            <v-card-actions>
                                <v-checkbox :v-model="card.enabled" label="i'm interested"></v-checkbox>
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
                    path: 'http://localhost/workshop/workshop-project1/src/assets/img/Citta.Logo.Black.CMYK_LowRes.jpg',
                    title: 'Città'
                },
                {
                    path: 'http://localhost/workshop/workshop-project1/src/assets/img/logo-cdp-2016(noir).png',
                    title: 'Compagnie de provence'
                }
            ],
            cards: [
                {
                    path: 'http://www.home-interieur.fr/photo/black-et-white1.jpg',
                    title: 'Black & White',
                    name_model:"includeFiles"
                },
                {
                    path: 'https://birchbox.fr/wp-content/uploads/2015/06/cdp-savon-liquide1.jpg',
                    title: 'Extra Pur',
                    name_model:"enabled"
                },
                {
                    path: 'https://www.manitself.fr/wp-content/uploads/2016/08/la-compagnie-de-provence-gel-apres-rasage.jpg',
                    title: 'Grooming For Men',
                    name_model:""
                },
                {
                    path: 'http://dorisknowsfashion.com/wp-content/uploads/2015/07/karit%C3%A9--1024x768.jpg',
                    title: 'Karite',
                    name_model:""
                },
                {
                    path: 'https://corso.co.nz/uploads/products/CDP18073_LS500.png',
                    title: 'Maison Home',
                    name_model:""
                },
                {
                    path: 'https://i.pinimg.com/736x/cb/67/7b/cb677bf02e3399a171db1679303d07e3--beauty-packaging-package-design.jpg',
                    title: 'Version Originale',
                    name_model:""
                },
            ],
            inputs: [
                {
                    name_label:"Name",
                    name_model:"name",
                    name_rules:"nameRules"
                },
                {
                    name_label:"E-mail",
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
    /*container d'un produit*/
    div.card{
        margin:3% 3%; /*top/bottom right/left*/
    }
    div.card.logo_header{
        height:800px;
    }
</style>