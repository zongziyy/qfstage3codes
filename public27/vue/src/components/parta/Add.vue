<template>
  <div>
    <el-button type="primary" @click="dialogFormVisible = true"
      >新增甲方</el-button
    >
    <el-dialog title="新增甲方" :visible.sync="dialogFormVisible">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="甲方名称" prop="partaname">
          <el-input type="text" v-model="ruleForm.partaname"></el-input>
        </el-form-item>
        <el-form-item label="甲方电话" prop="tel">
          <el-input type="text" v-model="ruleForm.tel"></el-input>
        </el-form-item>
        <el-form-item label="订单时间" prop="date">
          <el-date-picker
            v-model="ruleForm.date"
            type="date"
            placeholder="开始时间"
          >
          </el-date-picker>
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
import partainfo from "../../model/parta";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      dialogFormVisible: false,
      ruleForm: {
        partaname: "",
        tel: "",
        date: ""
      },
      rules: {
        partaname: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          {
            pattern: /^.{2,50}$/i,
            message: "长度2到50位",
            trigger: "blur"
          }
        ],
        tel: [
          { required: true, message: "手机号", trigger: "blur" },
          {
            pattern: /^1[0-9]{10}$/i,
            message: "长度11位手机号",
            trigger: "blur"
          }
        ],
        date: [{ required: true, message: "订单日期不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    ...mapMutations(["addPartaItem"]),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          var info = {
            partaname: this.ruleForm.partaname,
            tel: this.ruleForm.tel,
            date: this.ruleForm.date
          };
          partainfo.add(info).then(result => {
            if (result.data.code == 1) {
              this.$refs[formName].resetFields();
              this.dialogFormVisible = false;
              this.addPartaItem(info);
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