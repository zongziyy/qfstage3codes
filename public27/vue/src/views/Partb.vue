<template>
  <div>
    <part-add></part-add>
    <div>
      <el-table :data="partbList" border style="width: 100%">
        <el-table-column fixed prop="partbname" label="甲方名称">
        </el-table-column>
        <el-table-column prop="fax" label="传真"> </el-table-column>
        <el-table-column label="状态">
          <template>
            <el-button type="warning" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import add from "../components/partb/Add";
import partbInfo from "../model/partb";
import {mapState,mapMutations} from "vuex";
export default {
  data() {
    return {
      
    };
  },
  computed:{
    ...mapState(["partbList"])
  },
  methods:{
    ...mapMutations(["initPartbList"])
  },
  mounted() {
    partbInfo.list().then(result => {
      this.initPartbList(result.data.msg);
    });
  },
  components: {
    "part-add": add
  }
};
</script>