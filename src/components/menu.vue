<template> <!--container du template qui va être appelé-->
<v-app style="height:200px"> <!--taille du composant directement défini pour permettre au composant de prendre sa taile réel et pas 100% de la taille de la fenêtre-->
        <v-content id="menu">
                    <v-flex xs12 sm12 md12 lg12 xl12>
                        <v-card class="card_form">
                            <v-toolbar dark id="toolbar_menu" color="indigo">
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
                                <v-btn
                                @click="submit"
                                :disabled="!valid">SEND</v-btn>
                                <v-btn @click="clear">CLEAR</v-btn>
                            </v-form>
                        </v-card>
                        
                        <v-dialog class="modal_form" v-model="message_sent" max-width="500px">
                                 <v-card class="card_dialog" v-if="message_sent">
                                <v-card-title>
                             <transition name="fade">
                                    <span light-green>Your information and choices have been sent successfully</span>
                            </transition>
                                    <v-spacer></v-spacer>
                                    <v-menu bottom left>
                                    </v-menu>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn color="primary" flat @click.stop="message_sent=false">Close</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        
                    </v-flex>
        </v-content>
    </v-app>
</template>
<script>
//import store from "../store.js";
import Vuex from 'vuex'
import store from '../store.js'

    export default {

    methods: {
        toggle: function(){
            this.visible = !this.visible;
        }
    },
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
        // console.log(this.$store.state.retailer_email)
      return this.$store.state.retailer_email;
    },
    set (value) {
        //console.log(this.$store.state.retailer_email)
      this.$store.commit('UPDATE_EMAIL', value)
    }
  }
  },
        data: () => ({
            visible:true,
            message_sent:false,
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
                /*console.log('submiiiit   '+ this.$store.state.retailer_email  );
                console.log('submiiiit   '+ this.$store.state.retailer_name  );*/
                if (this.$refs.form.validate()) {
                    this.sendOrder().then(response => {
                        console.log("Got some data");
                         this.$refs.form.reset();
                         this.$router.push({ path: '/' });
                         this.message_sent = true;
                     }, error => {
                        console.error("Got nothing from server")
                    });
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
    /*input du formulaire*/
    div.flex.containerinput{
        padding:5px 20px;
    }
    /*titre dans le header*/
    nav[class^="toolbar"] h2{
        font-size:1.3em;
    }
  /*  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s, transform 1s;
}

.fade-enter, .fade-leave-active{
    opacity: 0;
    transform: translateY(20px);
}*/
</style>