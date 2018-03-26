<template> <!--container du template qui va être appelé-->
    <v-app >
        <v-content id="menu">
                    <v-flex xs12 sm12 md12 lg12 xl12>
                        <v-card class="card_form">
                            <v-toolbar dark color="primary">
                                <router-link :to="{name: 'Collections'}">
                                <v-btn color="blue darken-4" dark v-if="isOnProducts" @click="switchPage()">
                                    <v-icon dark left>arrow_back</v-icon>Collections
                                </v-btn>
                                </router-link>
                                <v-toolbar-title><h2>Personal Informations</h2></v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-form v-model="valid" ref="form" lazy-validation>
                                <v-layout row wrap>
                                <v-flex xl6 lg6 md6 sm6 xs12 containerinput>
                                <v-text-field
                                label="Name"
                                v-model="name"
                                :rules="nameRules"
                                :counter="10"
                                required></v-text-field>
                                </v-flex>
                                <v-flex xl6 lg6 md6 sm6 xs12 containerinput>
                                <v-text-field
                                label="E-mail"
                                v-model="email"
                                :rules="emailRules"
                                required></v-text-field>
                                </v-flex>
                                </v-layout>
                                <v-flex>
                                </v-flex>
                                <v-btn
                                @click="submit"
                                :disabled="!valid">SEND</v-btn>
                                <v-btn @click="clear">CLEAR</v-btn>
                            </v-form>
                        </v-card>
                    </v-flex>
        </v-content>
    </v-app>
</template>
<script>
//import store from "../store.js";
import Vuex from 'vuex'
import store from '../store.js'

    export default {
        store: store,
  computed:{
      ...Vuex.mapGetters(['isOnProducts']),
      name: {
    get () {
      return this.$store.state.retailer_name;
    },
    set (value) {
      this.$store.commit('UPDATE_NAME', value)
    }
  },
  email: {
    get () {
      return this.$store.state.retailer_email;
    },
    set (value) {
      this.$store.commit('UPDATE_EMAIL', value)
    }
  }
  },
        data: () => ({
            valid: false,
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length > 1) || 'Name must be greater than 1 characters'
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            select: null,
            items: [
                'Item 1',
                'Item 2'
            ],
        }),

        methods: {
            ...Vuex.mapActions({switchPage:'switchPage',
                                sendOrder: 'sendOrder'
                                }),

            submit () {
                if (this.$refs.form.validate()) {
                    this.$refs.form.reset();
                    this.sendOrder();
                    this.$router.push({ path: '/' });
                }
            },
            clear () {
                this.$refs.form.reset()
                this.valid = false;
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div.flex.containerinput{
        padding:5px 20px;
    }
    nav[class^="toolbar"]{
        border: 2px solid red;
        height:100px !important;
        display: flex;
        align-items: center;
    }
    nav[class^="toolbar"] h2{
        font-size:1.3em;
    }
</style>