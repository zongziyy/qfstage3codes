import Vue from 'vue'
import Vuex from 'vuex'
import  teacherModule from  "./teachModule";
import  leaveModel from "../model/leaveModel"


Vue.use(Vuex)


export default new Vuex.Store({
  state: { 
    leaveList:[], //单个学生的请假集合
  },
  mutations: {//同步操作
    initLeaveList(state,list){//初始化
      state.leaveList = list;
    },
    addLeaveList(state,item){//更新数据
      state.leaveList.push(item);
    }

  },
  actions: {//异步操作

    asyncInitLeaveList(context){
      leaveModel.query().then(res=>{
        let data = res.data;
        if(data.code==1){
            context.commit("initLeaveList",data.list)
        }else{
            this.$router.push("/");
        }
      })
    }

  },
  modules: {
    "teacher":teacherModule
  }
})
