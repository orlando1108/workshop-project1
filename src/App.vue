<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <router-view  name="header"/>
  <router-view/>
  </div>

</template>

<script>
import Alerte from '@/components/Alerte'

export default {
  components:{Alerte},
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>