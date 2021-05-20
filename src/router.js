import login from './views/login'
import home from './views/home'
import compras from './views/compras'
import ventas from './views/ventas'
import inventario from './views/inventario'
import articulos from './views/articulos' 
import categorias from './views/categorias'
import consulta_compra from './views/consulta_compra'
import consulta_venta from './views/consulta_venta'
import ingresos from './views/ingresos'
import persona_cliente from './views/persona_cliente'
import usuarios from './views/usuarios'
import proveedores from './views/proveedores'

export const routes = [
    {
      path: "/home",
      name: 'home',
      component: home
    },
    {
      path: "/",
      name: 'login',
      component: login
    },
    {
      path: "/compras",
      name: 'compras',
      component: compras
    }, 
    {
      path: "/ventas",
      name: 'ventas',
      component: ventas
    },
    {
      path: "/inventario",
      name: 'inventario',
      component: inventario
    },
    {
      path: '/articulos',
      name: 'articulos',
      component: articulos
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: categorias
    },
    {
      path: '/consulta_compra',
      name: 'consulta_compra',
      component: consulta_compra
    },
    {
      path: '/consulta_venta',
      name: 'consulta_venta',
      component: consulta_venta
    },
    {
      path: '/ingresos',
      name: 'ingresos',
      component: ingresos
    },
    {
      path: '/persona_cliente',
      name: 'persona_cliente',
      component: persona_cliente 
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: usuarios
    },
    {
      path: '/proveedores',
      name: 'proveedores',
      component: proveedores
    }
]
