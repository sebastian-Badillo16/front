<template>
    <div>
            <cabezera/>
            <h1>Estamos trabajando en las categorias</h1>
            <!--<mantenimiento/>-->
    </div>
</template>
<script>
import axios from 'axios'
//import mantenimiento from '../components/mantenimiento'
import cabezera from '../components/cabezera'
export default {
  components: { cabezera, /*mantenimiento*/ },
   // mantenimiento,
    cabezera,
  data(){
    return {
      categorias: []
    }
  },
  created(){
    this.listarCategorias()
  },
  methods:{
    listarCategorias(){
      let header = {headers:{"token":this.$store.state.token}}
      console.log('El token es ', this.$store.state.token);
      console.log('El header es ', header);
      axios.get('categoria', header)
      .then(response => {
        console.log (response.data.categoria);
        this.categorias = response.data.categoria;
      })
      .catch(error => {
        console.log(error.response)
      })
    }
  }
}
</script>
