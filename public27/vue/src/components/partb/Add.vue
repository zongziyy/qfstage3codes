<template>
  <div>
    <el-button type="primary" @click="dialogFormVisible = true"
      >新增乙方</el-button
    >
    <el-dialog title="新增乙方" :visible.sync="dialogFormVisible">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="乙方名称" prop="partbname">
          <el-input type="text" v-model="ruleForm.partbname"></el-input>
        </el-form-item>
        <el-form-item label="传真" prop="fax">
          <el-input type="text" v-model="ruleForm.fax"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import partbinfo from "../../model/partb";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      dialogFormVisible: false,
      ruleForm: {
        partbname: "",
        fax: "" 
      },
      rules: {
        partbname: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          {
            pattern: /^.{2,50}$/i,
            message: "长度2到50位",
            trigger: "blur"
          }
        ],
        tel: [
          { required: true, message: "传真不能位空", trigger: "blur" },
        ],
    }
    };
  },
  methods: {
    ...mapMutations(["addPartbItem"]),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          var info = {
            partbname: this.ruleForm.partbname,
            fax: this.ruleForm.fax
          };
          partbinfo.add(info).then(result => {
            if (result.data.code == 1) {
              this.$refs[formName].resetFields();
              this.dialogFormVisible = false;
              this.addPartbItem(info);
            } else {
              this.$message.error(result.data.msg);
            }
          });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.dialogFormVisible = false;
    }
  }
};
</script>