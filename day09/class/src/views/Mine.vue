<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' },
                 {pattern:/^[_$a-z][_$0-9a-z]{4,9}$/i,message:'请输入正确的用户名',trigger:'onChange'}]"
      />
      <van-field
        v-model="password"
        type="password"
        name="userpwd"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }, {pattern:/^[0-9a-z]{6,12}$/i,message:'请输入数字字母组成长度6到12位',trigger:'onChange'}]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button>
      </div>
    </van-form>
     <van-button round block type="info" @click="gotoRegister">没有账号 点击注册</van-button>
  </div>
</template>
<style scoped>
/* /deep/.van-field__error-message{   // >>> 专门用来修改UI组件的自带样式
    color:green;
} */
</style>
<script>
import  userModel from  "../model/userModel";
import  {Toast}  from  "vant";
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
      gotoRegister(){
          this.$router.history.push("/register");
      },
    onSubmit(info) {//成功的以后的结果
    //   console.log('submit', info);
        userModel.query({
            username:info.username,
            userpwd:info.userpwd
        }).then(res=>{
            // console.log(res.data);
            if(res.data.length){//有数据就是登录成功  data是一个集合
                let  userinfo   = res.data[0];
                window.localStorage.setItem("userid",userinfo.id);
                window.localStorage.setItem("username",userinfo.username);
                this.$router.history.push("/list");

            }else{
              Toast.fail("用户名和密码不匹配");
            }
        })
    },
  },
};
</script>