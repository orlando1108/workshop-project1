<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
  <div id="header">
    <h1>header</h1>
    <router-view name="header"/>

  </div>
    
    <h1>main</h1>

  <router-view/>
  
   
  </div>
</template>

<script>
export default {
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
  margin-top: 60px;
}
</style>