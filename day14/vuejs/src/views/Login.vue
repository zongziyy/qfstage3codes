<template>
    <div class="login">
        <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
        >
            <el-form-item label="用户名" prop="username">
                <el-input v-model.number="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input
                    type="password"
                    v-model="ruleForm.pass"
                    autocomplete="off"
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')"
                    >提交</el-button
                >
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<script>
export default {
    data() {
        var checkUsername = (rule, value, callback) => {
            if (!value) {
                return callback(new Error("用户名不能为空"));
            }
            callback();
        };
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            }
            callback();
        };
        return {
            ruleForm: {
                username: "",
                pass: "",
            },
            rules: {
                username: [{ validator: checkUsername, trigger: "blur" }],
                pass: [{ validator: validatePass, trigger: "blur" }],
            },
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert("submit!");
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
    },
};
</script>


<style lang="scss" scoped>
.login {
    width: 600px;
    margin: 0 auto;
}
</style>