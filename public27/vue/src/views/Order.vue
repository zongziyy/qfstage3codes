<template>
  <div>
    <el-steps :active="active" finish-status="success">
      <el-step title="选择甲方" icon="el-icon-edit"></el-step>
      <el-step title="选择乙方" icon="el-icon-edit"></el-step>
      <el-step title="选择产品" icon="el-icon-edit"></el-step>
    </el-steps>
    <div v-if="active == 0">
      <select-parta @next="next"></select-parta>
    </div>
    <div v-else-if="active == 1">
      <select-partb @next="next"></select-partb>
    </div>
    <div v-else-if="(active = 2)">
      <select-list></select-list>
    </div>
  </div>
</template>
<script>
import selectParta from "../components/order/Parta";
import selectPartb from "../components/order/Partb";
import selectList from "../components/order/List";
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    "select-parta": selectParta,
    "select-partb": selectPartb,
    "select-list": selectList
  },
  methods: {
    next() {
      this.active++;
      if (this.active > 2) {
        return false;
      }
      //if (this.active++ > 2) this.active = 0;
    }
  }
};
</script>