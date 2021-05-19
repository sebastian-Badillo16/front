<template>
    <div id="headers">
        <ul class="nav">
            <!-- Cambiar etiqueta 'a href' a 'router link'-->
            <li><a>Almacen</a>
                <ul>
                    <li><a><router-link :to="{ name: 'articulos'}">Articulos</router-link></a></li>
                    <li><a><router-link :to="{ name: 'categorias'}">Categorias</router-link></a></li>
                </ul>
            </li>
         
            <li><a>Compras</a>
                <ul>
                    <li><a href="/ingresos">Ingresos</a></li>
                    <li><a href="/proveedores">Proveedores</a></li>
                </ul>
            </li>

            <li><a>Ventas</a>
                <ul>
                    <li><a href="/ventas">Ventas</a></li>
                    <li><a href="/persona_cliente">Clientes</a></li>
                </ul>
            </li>

            <li><a>Accesos</a>
                <ul>
                    <li><a href="/usuarios">Usuarios</a></li>
                </ul>
            </li>

            <li><a>consultas</a>
                <ul>
                    <li><a href="/consulta_compra">Compras</a></li>
                    <li><a href="/consulta_venta">Ventas</a></li>
                </ul>
            </li>

             <li><a><img id="imagen" src="../assets/person-fill.svg" alt="imagen"></a>
                <ul>
                    <li><a>Nombre: </a></li>
                    <li><a>Rol: </a></li>
                    <li><a href="/">Salir   <img src="../assets/power.svg" alt="imagen2"></a></li>
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
    padding: 10px 15px;
    display: block;
}

.nav li a:hover {
    background-color: #e0a9ff;
}

.nav li ul {
    display:none;
    position: absolute;
    min-width: 140px;
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