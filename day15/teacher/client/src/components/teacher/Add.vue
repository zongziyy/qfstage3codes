<template>
  <div class="header">
    批量新增学生<input type="file" accept=".xls,.xlsx" @change="getFile" />
    <el-button type="primary" @click="exportFile">导出当前页的数据</el-button>
    <el-button type="primary" @click="add">新增学员</el-button>
    <el-button type="primary" @click="gotoEcharts">请假分析</el-button>
    <el-dialog title="学员详情" :visible.sync="flag">
      <el-form :model="form" :rules="rules" ref="ruleForm">
        <el-form-item
          label="姓名"
          :label-width="formLabelWidth"
          prop="username"
        >
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="resetForm('ruleForm')">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
import userModel from "../../model/userModel";
import { importsExcel,exportExcel } from "../../until/excel";
import  {mapState} from  "vuex"
export default {
  data() {
    return {
      formLabelWidth: "100px",
      flag: false,
      form: {
        username: "",
      },
      rules: {
        username: [
          { required: true, message: "学生名称不能为空", trigger: "blur" },
          { pattern: /^.{3,12}$/, message: "长度3到12位", trigger: "blur" },
        ],
      },
      headerList:[{ 
            title: '姓名',
            dataIndex: 'username',
            key: 'username',
            className: 'text-monospace',
        },{ 
            title: '请假理由',
            dataIndex: 'leaveReason',
            key: 'leaveReason',
            className: 'text-monospace',
        },{ 
            title: '开始时间',
            dataIndex: 'startDate',
            key: 'startDate',
            className: 'text-monospace',
        },
        { 
            title: '结束时间',
            dataIndex: 'endDate',
            key: 'endDate',
            className: 'text-monospace',
        },{ 
            title: '审批状态',
            dataIndex: 'type',
            key: 'type',
            className: 'text-monospace',
        }]
    };
  },
  computed:{
        ...mapState({ allList: (state) => state.teacher.leaveList }),
  },
  methods: {
    exportFile(){
      exportExcel(this.headerList,this.allList.map(item=>{
        item.type = item.type==1?"待审批":(item.type==2?"已同意":"已拒绝");
        item.username  = item.userid.username;
        return item;
      }),"请假信息.xlsx")
    },
    getFile(e) {//文件导入的方法
      importsExcel(e).then(
        function (data) {
            //这个data就是excel表中的数据
            userModel.insertMany({data}).then(res=>{
                console.log(res);
            })
        },
        function (data) {
          console.log(data);
        }
      );
    },
    gotoEcharts(){
      this.$router.push("/echarts");
    },
    add() {
      this.flag = true;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //验证成功以后做登录
          //
          let username = this.form.username;
          let userpwd = "123456";
          let usertype = 2;

          userModel
            .register({
              username,
              userpwd,
              usertype,
            })
            .then((res) => {
              let data = res.data;
              if (data.code == 1) {
                //注册成功
                this.flag = false;
              } else {
                alert("注册失败");
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.flag = false;
    },
  },
};
</script>