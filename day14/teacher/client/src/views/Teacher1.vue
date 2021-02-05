<template>
  <div>
    <el-table :data="allList" border style="width: 100%">

      <el-table-column fixed prop="userid.username" label="学生姓名">
      </el-table-column>
      <el-table-column fixed prop="leaveReason" label="请假理由">
      </el-table-column>
      <el-table-column label="开始时间">
        <template slot-scope="scope">
          <span>{{ scope.row.startDate | filterDate }}</span>
        </template>
      </el-table-column>
      <el-table-column label="结束时间">
        <template slot-scope="scope">
          <span>{{ scope.row.endDate | filterDate }}</span>
        </template>
      </el-table-column>

      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
            <span v-if="scope.row.type == 1">
             <el-button type="success" @click="changetype(scope.row._id,2)"
            >同意</el-button>
             <el-button type="danger" @click="changetype(scope.row._id,3)" >拒绝</el-button>
            </span>
     
          <el-button type="primary" v-else-if="scope.row.type == 2"
            >已同意</el-button
          >
          <el-button type="danger" v-else>已拒绝</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import leaveModel from "../model/leaveModel";
export default {
  data() {
    return {
      allList: [],
    };
  },
  created() {//查询所有请假记录
    leaveModel.queryAll().then((res) => {
      console.log(res);
      let data = res.data;
      if (data.code == 1) {
        this.allList = data.list;
      } else {
        this.$router.push("/");
      }
    });
  },
  methods:{
      //更新方法
      changetype(_id,type){
          leaveModel.update({_id,type}).then(res=>{
              let  data  = res.data;
              if(data.code==1){
                  //this.$router.go(0);
                //不想刷新  局部更新
                this.allList = this.allList.map(item=>{
                    if(item._id==_id){
                        item.type = type;
                    }
                    return  item;
                });
              }else{
                  alert("更新失败");
              }
          })
      }
  }
};
</script>