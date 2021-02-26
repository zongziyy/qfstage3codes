import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    partaList:[],
    partbList:[],
    partainfo:{},//选择的甲方信息
    partbinfo:{},//选择的乙方信息
    orderList:[],//订单集合
  },
  mutations: {
    initPartaInfo(state,info){
        state.partainfo = {...info};
    },
    initPartbInfo(state,info){
      state.partbinfo = {...info}
    },
    initPartaList(state,list){
      state.partaList = list;
    },
    addPartaItem(state,item){
      state.partaList=[...state.partaList,item];
    },
    initPartbList(state,list){
      state.partbList = list;
    },
    addPartbItem(state,item){
      state.partbList=[...state.partbList,item];
    },
    initOrderList(state,list){
      state.orderList = list;
    },
    addOrderItem(state,item){
      state.orderList=[...state.orderList,item];
    }
  },
  actions: {},
  modules: {}
});
