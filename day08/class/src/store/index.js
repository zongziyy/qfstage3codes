import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//只放数据的声明
    num:10,
    flag:true,
    list:[]
  },
  mutations: { //只放数据的修改方法
    addNum(state){
      state.num++;
    },
    changeFlag(state,flag){
      state.flag = flag;
    },
    addList(state,item){//往集合里面新增数据
      state.list = [...state.list,item];
    }
  },
  actions: {//异步数据
  },
  modules: {//数据很多可以采用模块
  }
})
