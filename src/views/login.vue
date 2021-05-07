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
                <button v-if="email.length > 3 && password.length > 3" id="boton" v-on:click="login()" type="button" value="Enviar" href="/home">login</button>
                <button v-else id="boton"  type="button" value="Enviar">funcionando v else</button>
                 <br>
                <p></p>
                <br>
            </div>
        </div>
    </div>

</template>
<script>
export default {
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
         login() {
      console.log(this.email);
      console.log(this.password);
      
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
   background-color: #7868e6;
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
    background:#ecf0f1;
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
    background:#ecf0f1;
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
}

</style>