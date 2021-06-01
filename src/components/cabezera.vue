<template>
    <div id="headers">
        <ul class="nav">
            <!-- Cambiar etiqueta 'a href' a 'router link'-->
            
            <li><router-link :to="{ name: 'home'}"><img src="../assets/house-fill.svg" alt="imagen3"></router-link></li>

            <li><a><strong>Almacen</strong></a>
                <ul>
                    <li><a><router-link :to="{ name: 'articulos'}">Articulos</router-link></a></li>
                    <li><a><router-link :to="{ name: 'categorias'}">Categorias</router-link></a></li>
                </ul>
            </li>
         
            <li><a><strong>Compras</strong></a>
                <ul>
                    <li><a><router-link :to="{ name: 'ingresos'}">Ingresos</router-link></a></li>
                    <li><a><router-link :to="{ name: 'proveedores'}">Proveedores</router-link></a></li>
                </ul>
            </li>

            <li><a><strong>Ventas</strong></a>
                <ul>
                    <li><a><router-link :to="{ name: 'ventas'}">Ventas</router-link></a></li>
                    <li><a><router-link :to="{ name: 'persona_cliente'}">Clientes</router-link></a></li>
                </ul>
            </li>

            <li><a><strong>Accesos</strong></a>
                <ul>
                    <li><a><router-link :to="{ name: 'usuarios'}">Usuarios</router-link></a></li>
                </ul>
            </li>

            <li><a><strong>consultas</strong></a>
                <ul>
                    <li><a><router-link :to="{ name: 'consulta_compra'}">Compras</router-link></a></li>
                    <li><a><router-link :to="{ name: 'consulta_venta'}">Ventas</router-link></a></li>
                </ul>
            </li>

             <li><a><img id="imagen" src="../assets/person-fill.svg" alt="imagen"></a>
                <ul>
                    <li><a>Nombre: {{ nombre }}</a></li>
                    <li><a>Rol: </a></li>
                    <li><a><router-link :to="{ name: 'login'}">Salir   <img src="../assets/power.svg" alt="imagen2"></router-link></a></li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    
    data(){
        return {
            nombre: 'probando'
        }
    },

    getNombre(){
        axios.get('nombre')
        .then(response => {
            console.log (response.data.usuario.nombre);
            this.nombre = response.data.usuario.nombre;
        })
        .catch(error => {
            console.log(error.response)
        })
    }

    
    
} 

</script>

<style scope>
* {
    padding: 0px;
    margin: 0px;
}

#headers{
    margin: auto;
    width: max-content;
    /*background-color: #dc9fff;*/
    text-align: center;
    display: block;
    color: #fff;
    max-width: 1000px;

}

ul, ol{
    list-style: none;
    


}

.nav li a{
    background: #877aff;
    color: #fff;
    text-decoration: none;
    padding: 5px 10px;
    display: block;
        


}

.nav li a:hover{
    background-color: #e0a9ff;

}

.nav li ul{
    display:none;
    position: absolute;
    min-width: 100px;
}

.nav > li{
    float: left;

}

.nav li:hover > ul{
    display: block;

}

a{
    text-align: center;

}

#imagen{
    width: 20px;
    height: auto;
}

</style>