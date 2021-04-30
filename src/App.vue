<template>
  <div id="app">
    <h1>componente padre, app</h1>
    <router-link :to="{ name: 'login'}">login</router-link>
    <p></p>
    <router-link :to="{ name: 'home'}">home</router-link>
    <p></p>
    <router-link :to="{ name: 'compras'}">compras</router-link>
    <p></p>
    <router-link :to="{ name: 'ventas'}">ventas</router-link>
    <p></p>
    <router-link :to="{ name: 'inventario'}">inventario</router-link>

  

  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
