<template>
  <div class="home">
    <h1>27极简管理系统</h1>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="userpwd">
        <el-input
          type="password"
          v-model="ruleForm.userpwd"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >登录</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div> 
</template>

<script>
import  user  from  "../model/userinfo";
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        userpwd: ""
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          {
            pattern: /^[0-9a-z]{2,10}$/i,
            message: "只能是数字字母组成长度2到10",
            trigger: "blur"
          }
        ],
        userpwd: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            pattern: /^[0-9a-z]{5,10}$/i,
            message: "只能是数字字母组成长度5到10",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //alert("submit!"+this.ruleForm.username);
          user
            .login(this.ruleForm.username, this.ruleForm.userpwd)
            .then(result => {
              if (result.data.code == 1) {
                  window.localStorage.setItem("username",this.ruleForm.username);
                  window.localStorage.setItem("token",result.data.token);
                  this.$router.push({name:"parta"})

              } else {
                this.$message.error(result.data.msg);
              }
            });
        } else {
          this.$message.error("注意红色提示");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
.home{
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
width: 50%;
height: 50%;
margin: auto;
}
</style>