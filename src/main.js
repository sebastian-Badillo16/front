import axios from "axios";
import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router';
import {routes} from './router';
import {store} from './store/store'; 

axios.defaults.baseURL='http://localhost:8080/api/'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

