<template>
    <div>
    <router-link :to="{ name: 'login'}">login</router-link>
    <p></p>
    <router-link :to="{ name: 'home'}">home</router-link>
    <p></p>
    <router-link :to="{ name: 'compras'}">compras</router-link>
    <p></p>
    <router-link :to="{ name: 'ventas'}">ventas</router-link>
    <p></p>
    <router-link :to="{ name: 'inventario'}">inventario</router-link>  
    <p></p>
    <router-link :to="{ name: 'prueba'}">prueba</router-link>  
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>