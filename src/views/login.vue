<template>
    <div class="container">
        <div id="cabezera">
            <h1 style = "font-family:courier,arial,helvética;" id="titulo"><strong>Login</strong></h1>
        </div>
        <div class="cuerpo">
            <div class="cajas">
                <br>
                <input id="correo" v-model="email" placeholder="@email.com" type="email">
                <br>
                <p></p>
                <br>
                <input id="clave" v-model="password" placeholder="********" type="password">
                <br>
                <p></p>
                <br>
                <button v-if="email.length > 3 && password.length > 5" id="boton" v-on:click="login()" type="button" value="Enviar" href="/home">Enviar</button>
                <button v-else id="botonRed" v-on:click="errores()"  type="button" value="Enviar">Enviar</button>
                 <br>
                <p></p>
                <br>
            </div>
        </div>
    </div>

</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  
    data(){
        return{
            email: "",
            password: "",
            swal: ''
        }
    },
  
  methods: {
         login() {
            axios.post("usuario/login", {email:this.email, password:this.password})
            .then(response => {
            this.$store.dispatch("setToken", response.data.token);
            console.log('Probando token', this.$store.state.token)
            this.$router.push("/home");
            console.log(response)

            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Ingresado con exito!',
              showConfirmButton: false,
              timer: 1500
            })

      })
      .catch((error) =>{
            console.log(error.response.data);

            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Hubo un error con el correo o contraseña ',
            })
           
      })
    },
    errores() {
    
    Swal.fire({
      icon: 'question',
      text: 'Correo o contraseña no tiene caracteres',
    })    

    }
  }
};
</script>
<style scoped>

*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
}

.container{
    width: 300px;
    margin-top: 200px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    background-image: linear-gradient(-225deg, #f3e3fd 50%, #dc9fff 50%);
}

#cabezera{
    color: white;
    background-color: rgba(0, 0, 0, 0.253);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-top: 10px;
    border-bottom: 10px
}

.cuerpo{
    border-top: 10px;
    border-bottom: 10px
}

#correo{
    background:#ffffff;
    border: rgba(255, 255, 255, 0) 1px solid;
    border-bottom: #ccc 2px solid;
    padding: 8px;
    width:210px;
    color:#5d5d5d;
    margin-top:10px;
    font-size:1em;
    border-radius:4px;
}

#clave{
    background:#ffffff;
    border: rgba(255, 255, 255, 0) 1px solid;
    border-bottom: #ccc 2px solid;
    padding: 8px;
    width:210px;
    color:#5d5d5d;
    margin-top:10px;
    font-size:1em;
    border-radius:4px;
}

#boton {
    margin-left:0px;
    margin-top: 10px;
    width: 50%;
    top: 100%;
    border-radius: 25px;
    padding-top:5px;
    padding-bottom:5px;
    background:#2ecc71;
    color:white;
    border-radius:4px;
    border-style: none;
}

#botonRed {
    margin-left:0px;
    margin-top: 10px;
    width: 50%;
    top: 100%;
    border-radius: 25px;
    padding-top:5px;
    padding-bottom:5px;
    background:#dd0a0a;
    color:white;
    border-radius:4px;
    border-style: none;
}

</style>