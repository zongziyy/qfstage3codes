import Vue from 'vue'
import Vuex from 'vuex'
import shoppingcarrequest from '../model/shoppingCar'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        navFlag: true,
        shoppingList: [],
    },
    mutations: {
        changeFlag(state, flag) {
            state.navFlag = flag;
        },
        reloadShoppingList(state, list) {
            state.shoppingList = list
        },
        changeChecked(state, ele) {
            state.shoppingList = state.shoppingList.map(item => {
                if (item.id == ele.id) {
                    return ele
                } else {
                    return item
                }
            })
            // console.log(state.shoppingList);
        }
    },
    actions: {
        query(context, payload) {
            shoppingcarrequest.query(payload).then(res => {
                // console.log(res.data)
                context.commit("reloadShoppingList", res.data)
            })
        },
        patch(context, payload) {
            // console.log(payload)
            shoppingcarrequest.addNum(payload.id, payload.data).then(res => {
                // console.log(res.data);
                context.commit("changeChecked", res.data);
            })
        },
        del(context, payload) {
            shoppingcarrequest.del(payload).then(() => {
                let username = localStorage.getItem("username")
                // console.log(username)
                context.dispatch("query", { username })
            })
        }
    },
    modules: {}
})