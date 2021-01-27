<template>
  <div class="login">
    <van-nav-bar
      title="登陆"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <img class="logo" src="../../images/logo_03.png" alt="" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label=""
        placeholder="用户名"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /^[a-z][\w]{5,11}$/i, message: '用户名格式错误' },
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label=""
        autocomplete="off"
        placeholder="密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^[\w]{5,11}$/i, message: '密码格式错误' },
        ]"
      />
      <div style="margin: 16px">
        <van-button class="sub" round block type="info" native-type="submit"
          >登陆</van-button
        >
      </div>
      
      <!-- <div class="zd" @click="zzzz">{{ user.id }}sss</div> -->
    </van-form>
    <div style="margin: 16px">
        <van-button  round block type="info" @click="register"
          >还没有账号? 去注册!</van-button
        >
      </div>
  </div>
</template>
<style  scoped>
.logo {
  margin-top: 50px;
  margin-bottom: 100px;
}
.sub {
  background-color: #fc2d65;
  border: #fc2d65;
}
</style>
<script>
// import info from "../components/mine/info";
import { Toast } from "vant";
import userModel from "../../moldel/userModel";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: "",

    };
  },
  computed: {
    ...mapState(["loginstatus", "user"]),
  },
  created(){
      
  },
  methods: {
    register(){
      this.$router.history.push("/register");
    },
    ...mapActions(["asyncqueryuser"]),
    ...mapMutations(["changeloginstatus"]),
    onClickLeft() {
      // Toast('返回');
      this.$router.history.push("/mine");
    },

    onSubmit(info) {
      userModel
        .userInfo({
          username: info.username,
          pwd: info.password,
        })
        .then((res) => {
          if (res.data != "") {
            // console.log(res.data);
            localStorage.setItem("username", res.data[0].username);
            this.changeloginstatus(true);
            Toast.success("密码正确,登陆中");
            this.$router.history.push("/mine");
          } else {
            Toast.fail("密码或者账号不正确");
            //
            this.changeloginstatus(false);
          }
        });
    },
  },
};
</script>