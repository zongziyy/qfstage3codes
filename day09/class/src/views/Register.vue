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
       <van-field
        v-model="password1"
        type="password"
        name="userpwd1"
        label="确认密码"
        placeholder="确认密码"
        :rules="[{ required: true, message: '请填写密码' }, {pattern:/^[0-9a-z]{6,12}$/i,message:'请输入数字字母组成长度6到12位',trigger:'onChange'}]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >注册</van-button>
      </div>
    </van-form>
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
      password1: '',
    };
  },
  methods: {
  
    onSubmit(info) {//成功的以后的结果
    //    console.log('submit', info);
         if(info.userpwd1 === info.userpwd){
            //  alert("一致");
            //把数据放到数据库
                userModel.query({username:info.username}).then(res=>{//查询用户名是否存在
                        if(res.data.length){//有数据 该用户名存在
                                Toast.fail("该用户名已经存在");
                        }else{
                           userModel.add({//新增
                               username:info.username,
                               userpwd:info.userpwd
                           }).then(()=>{
                            //    console.log(res.data);  成功以后 会返回成功的结果  是一个对象
                                this.$router.history.push("/mine")
                           })
                        }

                });

            
         }else{
            Toast.fail("两次输入的密码不一致");
         }
   
    },
  },
};
</script>