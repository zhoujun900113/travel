import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)


export default new Vuex.Store({
    state,
    /*组件可以直接调用mutations
    actions:{
        changeCity(ctx, city){
            ctx.commit('changeCity',city)
        }
    },*/
    mutations,
    getters:{
        doubleCity(state){
            return state.city + " " + state.city
        }
    }
})