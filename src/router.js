import Vue from "vue";
import VueRouter from 'vue-router'
import login from './views/login'
import home from './views/home'
import compras from './views/compras'
import ventas from './views/ventas'
import inventario from './views/inventario'
    
Vue.use(VueRouter)

const routes = [
    {
      path: "/",
      name: 'home',
      component: home
    },
    {
      path: "/login",
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
]




const router = new VueRouter({
    mode: "history",
    routes
  });
  
  export default router;