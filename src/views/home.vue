<template>
    <div>
    <cabezera/>

    <img id="imagen_fondo" src="../assets/fondo.jpg" alt="compras_imagen">

    </div>

</template>

<script>
import cabezera from '../components/cabezera.vue'
export default {
    components: {cabezera}
}
</script>
<style scope>
   

    #imagen_fondo{
        max-width: 100%;
        height: auto;
    }
</style>