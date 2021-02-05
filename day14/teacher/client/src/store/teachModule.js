import  leaveModel  from "../model/leaveModel";
export default  {//老师的模块
    namespaced:true,
    state:{
      leaveList:[],//请假的集合
    },
    mutations:{//同步方法
      initLeaveList(state,list){
        state.leaveList = list;
      }
    },
    actions:{//异步方法
      asyncInitLeaveList(context,info){
         // console.log(info);
        //请求数据
        leaveModel.queryAll(info).then(res=>{
          let  data = res.data;
          info.callback(data.count);//回调
          context.commit("initLeaveList",data.list)
        })

      }
    }
  }