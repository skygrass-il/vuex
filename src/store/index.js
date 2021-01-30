import Vue from 'vue';
import Vuex from 'vuex';
import productsModules from './products';
import cartsModules from './carts';

Vue.use(Vuex);

export default new Vuex.Store({
    strict:true,
    state:{
        isLoading:true,
    },
    actions:{
        updateLoading(context,status) {
            context.commit('LOADING',status);
        },
    },
    mutations:{
        LOADING(state,status) {
            state.isLoading = status;
        },
    },
    getters:{
        isLoading(state) {
            return state.isLoading;
        },
    },
    modules:{
        productsModules,
        cartsModules,
    }
})