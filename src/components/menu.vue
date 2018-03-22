<template> <!--container du template qui va être appelé-->
    <v-app id="inspire">
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="primary">
                                <v-toolbar-title><h2>Informations à remplir</h2></v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field name="nom" label="Nom entreprise" id="password" type="text"></v-text-field>
                                    <v-text-field name="email" label="Email entreprise" type="text"></v-text-field>
                                    <!--prepend-icon="email"-->
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary">Envoyer</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>
<script>
    export default {
        data: () => ({
            drawer: null
        }),
        props: {
            source: String
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>