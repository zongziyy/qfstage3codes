<template>
  <div>
    <leaveadd @addleavelist="addLeaveList"></leaveadd>
    <div class="list">
      <el-table :data="leaveList" border style="width: 100%">
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
            <el-button type="primary" v-if="scope.row.type == 1"
              >待审批</el-button
            >
            <el-button type="success" v-else-if="scope.row.type == 2"
              >已同意</el-button
            >
            <el-button type="danger" v-else>拒绝</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
//备份的组件通信  解决数据更新
import leaveModel from "../model/leaveModel";
import leaveadd from "../components/student/Add1";
export default {
  data() {
    return {
      leaveList: [],//当前的用户名的请假集合
    };
  },
  methods:{
    addLeaveList(item){
      console.log(item);
      this.leaveList.push(item);
    }

  },
  filters: {
    filterDate(date) {
      let str = date.substring(0, date.length - 1);
      return new Date(str).dateFormate("yyyy年mm月dd日");
    },
  },
  created() {
    leaveModel.query().then((res) => {
      let data = res.data;
      if (data.code == 1) {
        this.leaveList = data.list;
      } else {
        this.$router.push("/");
      }
    });
  },
  components: {
    leaveadd,
  },
};
</script>