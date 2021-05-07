<template>
    <div>
    <cabezera/>
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
    <img id="imagen" src="https://previews.123rf.com/images/nicolasmenijes/nicolasmenijes1412/nicolasmenijes141200206/34647873-ilustraci%C3%B3n-de-render-3d-cesta-concepto-de-compra-online-de-fondo-blanco.jpg" alt="compras_imagen">

    </div>

</template>

<script>

import cabezera from '../components/cabezera'
export default {
    components: {
    cabezera
  
    }
}
</script>
<style scoped>
    #imagen{
        width: 1000px;
    }
</style>