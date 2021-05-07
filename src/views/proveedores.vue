<template>
    <div>
            <cabezera/>
            <h1>Estamos trabajando en los proveedores</h1>
            <mantenimiento/>
    </div>
</template>
<script>
import mantenimiento from '../components/mantenimiento'
import cabezera from '../components/cabezera'
export default {
  components: { cabezera,mantenimiento },
    mantenimiento,
    cabezera
}
</script>
