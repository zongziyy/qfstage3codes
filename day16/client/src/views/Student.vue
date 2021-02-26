<template>
  <div>
    <leaveadd></leaveadd>
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
        <el-table-column label="附件">
          <template slot-scope="scope">
            <span v-if="scope.row.pic">
              <el-image
                style="width: 100px; height: 100px"
                :src="scope.row.pic.split('_')[0]"
                :preview-src-list="scope.row.pic.split('_')"
              >
              </el-image>
            </span>
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
import leaveadd from "../components/student/Add";
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["leaveList"]),
  },
  methods: {
    ...mapActions(["asyncInitLeaveList"]),
  },

  created() {
    this.asyncInitLeaveList();
  },
  components: {
    leaveadd,
  },
};
</script>