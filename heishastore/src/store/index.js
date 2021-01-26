import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        navFlag: true
    },
    mutations: {
        changeFlag(state, flag) {
            state.navFlag = flag;
        },
    },
    actions: {},
    modules: {}
})