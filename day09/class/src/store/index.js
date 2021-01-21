import Vue from 'vue'
import Vuex from 'vuex'
import goodsModel from "../model/goodsModel"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodsList: [],
    num: 10,
    shoppingcarList:[],
  },
  mutations: {//同步操作
    initGoodsList(state, list) {//初始化list
      state.goodsList = list;
    },
    changeNum(state, n) {
      state.num = state.num + n
    },
    initShoppingCarList(state,list){
      state.shoppingcarList = list;
    },
    updateShoppingCarList(state,info){//根据编号 去更新购买的数据
      // console.log(id,num);
     // console.log(info);
      state.shoppingcarList = state.shoppingcarList.map((item)=>{
        if(item.id == info.id){
          item.buynum = item.buynum*1 +info.n;
        }
        return  item;
      })
    }

  },
  actions: {//异步操作
    asyncInitGoodsList(context) {
      goodsModel.query().then(res => {
            context.commit("initGoodsList",res.data)
        })

    },

    asyncChangeNum(context, n) {
      setTimeout(() => {
        context.commit("changeNum", n)
      }, 2000);
    }
  },
  modules: {
   
  }
})
