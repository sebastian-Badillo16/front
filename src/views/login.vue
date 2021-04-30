<template>
    <div class="formulario">
        <div class="container">
            <h1 style = "font-family:courier,arial,helvética;" id="titulo"><strong>Registro</strong></h1>
        </div>
        <div class="cuerpo">
            <div class="cajas">
                <input id="correo" v-model="email" placeholder="@hemail.com" type="email">
                <br>
                <p></p>
                <br>
                <input id="clave" v-model="password" placeholder="********" type="password">
                <br>
                <p></p>
                <br>
                <button id="boton" @click='login()' type="button" value="Enviar">Enviar</button>
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

#titulo{
    color: white;
}

.container{
    background-color: #6155a6;
    height: auto;
    margin: auto;
    width: 300px;
    padding: 20px;
    margin-top: 200px;
    border-style: hidden;
}

.cuerpo{
    background-color: #a685e2;
    height: auto;
    margin: auto;
    width: 300px;
    padding: 30px;
    border-style: hidden;
}

#correo{
    background:#ecf0f1;
    border: rgba(255, 255, 255, 0) 1px solid;
    border-bottom: #ccc 2px solid;
    padding: 8px;
    width:240px;
    color:#5d5d5d;
    font-size:1em;
    border-radius:4px;
     padding-top:5px;
         width: 100%;
    top: 100%;

}

#clave{
    background:#ecf0f1;
    border: rgba(255, 255, 255, 0) 1px solid;
    border-bottom: #ccc 2px solid;
    padding: 8px;
    width:240px;
    color:#5d5d5d;
    font-size:1em;
    border-radius:4px;
     padding-top:5px;
         width: 100%;
    top: 100%;

}

#boton{
     margin-left:0px;
    margin-top: 10px;
    width: 100%;
    top: 100%;
    border-radius: 25px;
    padding-top:5px;
    padding-bottom:5px;
    background:#6155a6;
    color:white;
    border-radius:4px;

}
</style>