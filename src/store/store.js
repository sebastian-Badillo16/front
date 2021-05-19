import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store ({

    state: {
        token: 'hola mundo',
        
        nombre: 'nombre persona'
    
    },
    mutations: {
        setToken (state,value){
            state.token = value;
        },

        setNombre (state,value){
            state.nombre = value;
        }
    },
    actions: { 
        setToken (context, value){
            context.commit ("setToken", value)
        },

        setNombre (context,value){
            context.commit ("nombre", value)
        }
     }


})
