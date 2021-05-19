<template>
    <div>
    <cabezera/>
    <button @click="test()">test</button>
<!--
    <router-link :to="{ name: 'login'}">login</router-link>
    <p></p>
    <router-link :to="{ name: 'home'}">home</router-link>
    <p></p>
    <router-link :to="{ name: 'compras'}">compras</router-link>
    <p></p>
    <router-link :to="{ name: 'ventas'}">ventas</router-link>
    <p></p>
    <router-link :to="{ name: 'inventario'}">inventario</router-link>  
    <pie/>
-->
    <img id="imagen" src="../assets/fondo.jpg" alt="compras_imagen">

    </div>

</template>

<script>

import cabezera from '../components/cabezera'
export default {
    components: {
    cabezera
  
    },
    methods:{
        test(){
            console.log(this.$store.state.token)
        }
    }
}
</script>
<style scoped>
    #imagen{
        max-width: 100%;
        height: auto;
    }
</style>