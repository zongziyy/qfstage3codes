<template>
  <div>
    <part-add></part-add>
    <div>
      <el-table :data="partaList" border style="width: 100%">
        <el-table-column fixed prop="partaname" label="甲方名称">
        </el-table-column>
        <el-table-column prop="tel" label="电话"> </el-table-column>
        <el-table-column label="日期">
          <template slot-scope="scope">
            {{ new Date(scope.row.date).dateFormat("yyyy年mm月dd日") }}
          </template>
        </el-table-column>
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
import add from "../components/parta/Add";
import partaInfo from "../model/parta";
import  {mapState,mapMutations} from "vuex";
export default {
  data() {
    return {
     // partaList: []
    };
  },
  computed:{
      ...mapState(["partaList"])
  },
  mounted() {
    partaInfo.list().then(resulte => {
            this.initPartaList(resulte.data.msg);
    });
  },
  methods:{
          ...mapMutations(["initPartaList"]),
  },
  components: {
    "part-add": add
  }
};
</script>