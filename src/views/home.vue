<template>
    <div>
    <superior/>
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
    </div>


</template>

<script>

import superior from '../components/cabezera'
export default {
    components: {
    superior
  
    }
}
</script>
<style scoped>

</style>