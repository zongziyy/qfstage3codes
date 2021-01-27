<template>
  <div class="login">
    <van-nav-bar
      title="注册"
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
      <van-field
        v-model="repassword"
        type="password"
        name="repassword"
        label=""
        autocomplete="off"
        placeholder="确认密码"
        :rules="[{ required: true, message: '请再次填写密码' }]"
      />

      <div style="margin: 16px">
        <van-button class="sub" round block type="info" native-type="submit"
          >提交注册</van-button
        >
      </div>
      <!-- <div class="zd" @click="zzzz">{{ user.id }}sss</div> -->
    </van-form>
  </div>
</template>
<style  scoped>
.logo {
  margin-top: 50px;
  margin-bottom: 100px;
}
/* .sub {
  background-color: #fc2d65;
  border: #fc2d65;
} */
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
      repassword: "",
    };
  },
  computed: {
    ...mapState(["loginstatus", "user"]),
  },
  created() {},
  methods: {
    ...mapActions(["asyncqueryuser"]),
    ...mapMutations(["changeloginstatus"]),

    onClickLeft() {
      this.$router.history.go(-1);
    },

    onSubmit(info) {
        // console.log(info);
      if (this.password == this.repassword) {
        userModel
          .userInfo({
            username: info.username,
            //   pwd: info.password,
          })
          .then((res) => {
            if (res.data != "") {
              Toast.fail("该账号已经被注册,请更换用户名");
            } else {
              localStorage.setItem("username", info.username);
              userModel
                .add({
                  username: info.username,
                  pwd: info.password,
                  search:[],
                  coupon:[]
                })
                .then((res) => {
                  if (res.data) {
                    this.changeloginstatus(true);
                    this.$router.history.push("/mine");
                    //
                    // this.changeloginstatus(false);
                    Toast.fail("注册成功");
                  } else {
                    Toast.fail("注册失败.请联系管理人员");
                  }
                });
            }
          });
      } else {
        Toast.fail("两次密码不一致!");
      }
    },
  },
};
</script>