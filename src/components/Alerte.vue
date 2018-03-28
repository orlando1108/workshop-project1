<template>
  

   <v-dialog class="modal_form" max-width="500px">
                            <v-card class="card_dialog" v-if="visible">

                              <transition name="fade">
                                <v-card-title>
                                    <span light-green>jdjqe ui uejiujedz  uhefhjzqiuhjazujuhiueahdiuhdofheiuh ihihihrihafiuhzfeuhzefuihzei iuhiqheifhuzeofjozufjzifjoeu</span>
                                    <v-spacer></v-spacer>
                                    <v-menu bottom left>
                                    </v-menu>
                                </v-card-title>
                              </transition>

                                <v-card-actions>
                                    <v-btn color="primary" flat @click="toggle">Close</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
</template>

<script>

export default{
    data(){
        return {
            visible:true
        }
    },
    methods: {
        toggle: function(){
            this.visible = !this.visible;
        }
    }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s, transform 0.5s;
}

.fade-enter, .fade-leave-active{
    opacity: 0;
    transform: translateX(20px);
}
</style>
