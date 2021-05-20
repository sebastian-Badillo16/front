<template>
    <div id="headers">
        <ul class="nav">
            <!-- Cambiar etiqueta 'a href' a 'router link'-->
            
            <li><router-link :to="{ name: 'home'}"><img src="../assets/house-fill.svg" alt="imagen3"></router-link></li>

            <li><a>Almacen</a>
                <ul>
                    <li><a><router-link :to="{ name: 'articulos'}">Articulos</router-link></a></li>
                    <li><a><router-link :to="{ name: 'categorias'}">Categorias</router-link></a></li>
                </ul>
            </li>
         
            <li><a>Compras</a>
                <ul>
                    <li><a><router-link :to="{ name: 'ingresos'}">Ingresos</router-link></a></li>
                    <li><a><router-link :to="{ name: 'proveedores'}">Proveedores</router-link></a></li>
                </ul>
            </li>

            <li><a>Ventas</a>
                <ul>
                    <li><a><router-link :to="{ name: 'ventas'}">Ventas</router-link></a></li>
                    <li><a><router-link :to="{ name: 'persona_cliente'}">Clientes</router-link></a></li>
                </ul>
            </li>

            <li><a>Accesos</a>
                <ul>
                    <li><a><router-link :to="{ name: 'usuarios'}">Usuarios</router-link></a></li>
                </ul>
            </li>

            <li><a>consultas</a>
                <ul>
                    <li><a><router-link :to="{ name: 'consulta_compra'}">Compras</router-link></a></li>
                    <li><a><router-link :to="{ name: 'consulta_venta'}">Ventas</router-link></a></li>
                </ul>
            </li>

             <li><a><img id="imagen" src="../assets/person-fill.svg" alt="imagen"></a>
                <ul>
                    <li><a>Nombre: </a></li>
                    <li><a>Rol: </a></li>
                    <li><a><router-link :to="{ name: 'login'}">Salir   <img src="../assets/power.svg" alt="imagen2"></router-link></a></li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
} 

</script>

<style scoped>
* {
    padding: 0px;
    margin: 0px;
}

#headers {
    margin: auto;
    width: max-content;
    /*background-color: #dc9fff;*/
    text-align: center;
}

ul, ol {
    list-style: none;
}

.nav li a {
    background: #ce7aff;
    color: #fff;
    text-decoration: none;
    padding: 5px 10px;
    display: block;
}

.nav li a:hover {
    background-color: #e0a9ff;
}

.nav li ul {
    display:none;
    position: absolute;
    min-width: 100px;
}

.nav > li {
    float: left;
}

.nav li:hover > ul {
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