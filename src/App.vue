<template>

<div id="app">
    <div id="header">
    <router-view name="header"/>
    </div>
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
  margin: 0 !important; 
  padding: 0 !important;
}
</style>