<template>
    <div class="superior">
            <ul style="float: center;" class="nav">
                <li><a><img src="https://image.flaticon.com/icons/png/512/20/20569.png" width='32px' height="24px"></a>
                <ul>
                    <li><a><strong>Almacen</strong></a>
                    <ul>
                        <li><a href=""><strong>Articulo</strong></a></li>
                        <li><a href=""><strong>Categoria</strong></a></li>
                    </ul>
                    </li>

                    <li><a><strong>Compras</strong></a>
                    <ul>

                        <p><br></p>

                        <li><a href=""><strong>Ingresos</strong></a></li>
                        <li><a href=""><strong>Proveedores</strong></a></li>
                    </ul>
                    </li>

                    <li><a><strong>Ventas</strong></a>
                    <ul>

                        <p><br></p>
                        <p><br></p>
                        
                        <li><a href="/ventas"><strong>Ventas</strong></a></li>
                        <li><a href=""><strong>Clientes</strong></a></li>
                    </ul>
                    </li>
                    
                    <li><a><strong>Accesos</strong></a>
                    <ul>

                        <p><br></p>
                        <p><br></p>
                        <p><br></p>
                        <br>
                        
                        <li><a href=""><strong>Usuarios</strong></a></li>    
                    </ul>
                    </li>


                    <li><a><strong>Consultas</strong></a>
                    <ul>
        
                        <p><br></p>
                        <p><br></p>
                        <p><br></p>
                        <p><br></p>
                
                        <li><a href=""><strong>Compras</strong></a></li>
                        <li><a href=""><strong>Ventas</strong></a></li>    
                    </ul>
                    </li>

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

.superior{
    margin-top: 0px;
    background-color: #7868e6;
    margin: 0px auto;
    padding: 0px;
    text-align: center;
}

ul, ol{
    list-style: none;
}

.nav li a{
    background-color: #7968e6ad;
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    display: block;
    font-size: 17px;
    transition: 500ms ease-in-out;
}

.nav li a:hover{
    background-color: #5749b6;
    color: white;
}

.nav > li {
    float: left;
}

.nav li ul{
    display: none;
    position: absolute;
    min-width: 120px;
}

.nav li:hover > ul{
    display: block;
}

.nav li ul  li{
    position: left;
}

.nav li ul li ul{
    left: 120px;
    top: 0px;
}

</style>