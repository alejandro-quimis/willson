import Vue from 'vue';
import Vuex from 'vuex';
import blogService from '@/services/blogService';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        estaLogueado:false,
    },
    mutations: {
        setEstaLogueado(state, payload) {
            state.estaLogueado = payload;
        },
    },
    actions: {

        async obtenerTodosPost(context){       
            const data = await blogService.obtenerTodosPost();
            return data;
        },

        async obtenerTodosGnews(context,pagina){       
            const data = await blogService.obtenerTodosGnews(pagina);
            return data;
        },

        async obtenerPost(context,id){       
            const data = await blogService.obtenerPost(id);
            return data;
        },

        async actualizarPost(context,modelo){
            const data = await blogService.actualizarPost(modelo);
            return data;
        },

        async crearPost(context,modelo){
            const data = await blogService.crearPost(modelo);
            return data;
        },

        async eliminarPost(context,modelo){
            const data = await blogService.eliminarPost(modelo);
            return data;
        },
    },
    getters: {
        estaLogueado(state){
            // return localStorage.getItem('usuario');
            return state.estaLogueado;
        }
    }
});
