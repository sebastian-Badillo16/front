<template>
  <v-app>
    <!--<cabezera/>-->
    <v-main>
      <router-view>
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
//import cabezera from './components/cabezera.vue'

export default {
  name: 'App',
  components: {
    //cabezera
  }
}
</script>

<style scoped>

*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
}
html, body {
  height: 100%;
}

</style>>




