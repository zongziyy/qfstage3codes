<template>
<div class="box">
<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名" prop="username">
    <el-input v-model="ruleForm.username"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="on"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<style scoped>
    .box{
        width: 500px;
        height: 600px;
        margin: 50px auto;
    }
</style>
<script>
import  userModel  from  "../model/userModel";
  export default {
    data() {
      return {
        ruleForm: {
          pass: '',
          username: ''
        },
        rules: {
        username: [
             { required: true, message: '用户名不能为空', trigger: 'blur' },
            { pattern: /^.{3,10}$/, message:"长度三到10位",trigger: 'blur' }
          ],
          pass: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
            { pattern: /^[a-z0-9]{3,10}$/i, message:"数字字母长度三到10位",trigger: 'blur' }
          ],
         
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {//验证成功以后做登录
              //验证成功了
              let  username  = this.ruleForm.username;
              let   userpwd  = this.ruleForm.pass;
                userModel.login({//登录成功的验证
                    username,userpwd
                }).then(res=>{
                    let  data  =res.data;//得到了数据
                    if(data.code==1){//表示成功
                        let token   = data.token;
                        localStorage.setItem("token",token);

                        this.$router.push("/"+data.path);

                    }else{
                        alert("用户名和密码不匹配")
                    }


                })
           
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>