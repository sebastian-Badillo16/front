<template>
    <div id="headers">
        <ul class="nav">
            <!-- Cambiar etiqueta 'a href' a 'router link'-->
            
            <li><router-link :to="{ name: 'home'}"><img src="../assets/house-fill.svg" alt="imagen3"></router-link></li>

            <li><a><strong>Almacen</strong></a>
                <ul>
                    <li><a>
                        <button @click="articulos()" value="enviar">Articulos</button>
                        </a></li>
                    <li><a>
                        <button @click="categorias()" value="enviar">Categorias</button>
                    </a></li>
                </ul>
            </li>
         
            <li><a><strong>Compras</strong></a>
                <ul>
                    <li><a>
                        <button @click="ingresos()" value="enviar">Ingresos</button>
                    </a></li>
                    <li><a>
                        <button @click="proveedores()" value="enviar">Proveedores</button>      
                    </a></li>
                </ul>
            </li>

            <li><a><strong>Ventas</strong></a>
                <ul>
                    <li><a>
                        <button @click="ventas()" value="enviar">Ventas</button>      
                    </a></li>
                    <li><a>
                        <button @click="clientes()" value="enviar">Clientes</button>      
                    </a></li>
                </ul>
            </li>

            <li><a><strong>Accesos</strong></a>
                <ul>
                    <li><a>
                        <button @click="usuarios()" value="enviar">Usuarios</button>      
                    </a></li>
                </ul>
            </li>

            <li><a><strong>consultas</strong></a>
                <ul>
                    <li><a>
                        <button @click="consulta_compra()" value="enviar">Compras</button>      
                    </a></li>
                    <li><a>
                        <button @click="consulta_venta()" value="enviar">Ventas</button>      
                    </a></li>
                </ul>
            </li>

             <li><a><img id="imagen" src="../assets/person-fill.svg" alt="imagen"></a>
                <ul>
                    <li><a>Nombre: {{ nombre }}</a></li>
                    <li><a>Rol: {{rol}} </a></li>
                    <li><a><router-link :to="{ name: 'login'}">Salir   <img src="../assets/power.svg" alt="imagen2"></router-link></a></li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    
    data(){
        return {
            nombre: this.$store.state.nombre,
            rol: this.$store.state.rol
        }
    },

    methods: {

        articulos(){
            if ( this.rol == 'ADMIN_ROL' || this.rol == 'ALMACENISTA_ROL') {
                console.log ('Funcionando con permisos') 

                this.$router.push("/articulos");

                } else {
                    console.log ('Funcionando sin permisos')

                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'No posee los permisos para ir a esta ventana',
                    })

                } 
        },

        categorias(){
            if ( this.rol == 'ADMIN_ROL' || this.rol == 'ALMACENISTA_ROL') {
                console.log ('Funcionando con permisos') 

                this.$router.push("/categorias");

                } else {
                    console.log ('Funcionando sin permisos')

                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'No posee los permisos para ir a esta ventana',
                    })

                } 
        },

        ingresos(){
            if ( this.rol == 'ADMIN_ROL' || this.rol == 'ALMACENISTA_ROL') {
                console.log ('Funcionando con permisos') 

                this.$router.push("/ingresos");

                } else {
                    console.log ('Funcionando sin permisos')

                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'No posee los permisos para ir a esta ventana',
                    })

                } 
        },

        proveedores(){
            if ( this.rol == 'ADMIN_ROL' || this.rol == 'ALMACENISTA_ROL') {
                console.log ('Funcionando con permisos') 

                this.$router.push("/proveedores");

                } else {
                    console.log ('Funcionando sin permisos')

                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'No posee los permisos para ir a esta ventana',
                    })

                } 
        },

        ventas(){
            if ( this.rol == 'ADMIN_ROL' || this.rol == 'VENDEDOR_ROL') {
                console.log ('Funcionando con permisos') 

                this.$router.push("/ventas");

                } else {
                    console.log ('Funcionando sin permisos')

                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'No posee los permisos para ir a esta ventana',
                    })

                } 
        },

        clientes(){
            if ( this.rol == 'ADMIN_ROL' || this.rol == 'VENDEDOR_ROL') {
                console.log ('Funcionando con permisos') 

                this.$router.push("/persona_cliente");

                } else {
                    console.log ('Funcionando sin permisos')

                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'No posee los permisos para ir a esta ventana',
                    })

                } 
        },

            usuarios(){
                if ( this.rol == 'ADMIN_ROL') {
                console.log ('Funcionando con permisos') 

                this.$router.push("/usuarios");

                } else {
                    console.log ('Funcionando sin permisos')

                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'No posee los permisos para ir a esta ventana',
                    })

                } 
        },

            consulta_compra(){
                this.$router.push("/consulta_compra");
        },
                

            consulta_venta(){
                 this.$router.push("/consulta_venta");
        },
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