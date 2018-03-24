<template> <!--container du template qui va être appelé-->
    <v-app>
        <v-content>
                    <v-flex xs12 sm12 md12 lg12 xl12>
                        <v-card class="card_form">
                            <v-toolbar dark color="primary">
                                <v-toolbar-title><h2>Informations à remplir</h2></v-toolbar-title>
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
                                :disabled="!valid">submit</v-btn>
                                <v-btn @click="clear">clear</v-btn>
                            </v-form>
                        </v-card>
                    </v-flex>
        </v-content>
    </v-app>
</template>
<script>

    export default {
        data: () => ({
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters'
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            select: null,
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4'
            ],
        }),

        methods: {
            submit () {
                if (this.$refs.form.validate()) {
                    // Native form submission is not yet supported
                    axios.post('/api/submit', {
                        name: this.name,
                        email: this.email,
                        select: this.select,
                        checkbox: this.checkbox
                    })
                }
            },
            clear () {
                this.$refs.form.reset()
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