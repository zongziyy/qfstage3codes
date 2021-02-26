<template>
  <div class="header">
    <el-button type="primary" @click="add">新增请假</el-button>
    <el-dialog title="请假详情" :visible.sync="flag">
      <el-form :model="form" :rules="rules" ref="ruleForm">
        <el-form-item
          label="请假理由"
          :label-width="formLabelWidth"
          prop="leaveReason"
        >
          <el-input v-model="form.leaveReason" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item
          label="开始时间"
          :label-width="formLabelWidth"
          prop="startDate"
        >
          <el-date-picker
            v-model="form.startDate"
            type="date"
            placeholder="开始时间"
          >
          </el-date-picker>
        </el-form-item>

        <el-form-item
          label="结束时间"
          :label-width="formLabelWidth"
          prop="endDate"
        >
          <el-date-picker
            v-model="form.endDate"
            type="date"
            placeholder="结束时间"
          >
          </el-date-picker>
        </el-form-item>

        <el-form-item label="附件" :label-width="formLabelWidth">
          <el-upload
            class="upload-demo"
            action="/api/uploads"
            name="filename"
            multiple
            :file-list="fileList"
            :auto-upload="false"
            ref="upload"
            :on-success="success"
            :on-change="change"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
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
import  leaveModel  from  "../../model/leaveModel"
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      fileList: [], //做预览用的
      selectedList: [], //选择的图片
      uploadList: [], //上传成功的图片
      formLabelWidth: "100px",
      flag: false,
      form: {
        leaveReason: "",
        startDate: "",
        endDate: "",
      },
      rules: {
        leaveReason: [
          { required: true, message: "请假理由不能为空", trigger: "blur" },
          { pattern: /^.{3,12}$/, message: "长度三到12位", trigger: "blur" },
        ],
        startDate: [
          { required: true, message: "开始时间不能为空", trigger: "blur" },
        ],
        endDate: [
          { required: true, message: "结束时间不能为空", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    ...mapMutations(["addLeaveList"]),
    change(file, fileList) {
      console.log(file);
      //每次改变触发
      //console.log(fileList);
      this.selectedList = fileList; //放需要上传的图片
    },
    success(res, file, fileList) {
       console.log(file,fileList);
      //上传事件触发
      //console.log(res.url)
      this.uploadList.push(res.url); //每上传成功一次 就把上传的图片地址 做一个记录
      if (this.uploadList.length == this.selectedList.length) {
        //表示图片全部上传完成
        //把
        let { leaveReason, startDate, endDate } = this.form;
        let pic = this.uploadList.join("_"); //把所有的图片串起来
        leaveModel
          .add({
            leaveReason,
            startDate,
            endDate,
            pic,
          })
          .then((res) => {
            let data = res.data;
            if (data.code == 1) {
              this.addLeaveList(res.data.info);
              this.$refs["ruleForm"].resetFields();
              this.flag = false; //关闭弹出层
            } else {
              alert("异常操作");
            }
          });
      }
    },

    add() {
      this.flag = true;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //验证成功以后做登录
          //
          let { leaveReason, startDate, endDate } = this.form;
          if (new Date(endDate) >= new Date(startDate)) {
            if (this.selectedList.length) {
              //判断条件
              this.$refs.upload.submit(); //开始图片上传
            } else {
              leaveModel
                .add({
                  leaveReason,
                  startDate: startDate,
                  endDate: endDate,
                })
                .then((res) => {
                  if (res.data.code == 1) {
                    //这里是新增成功
                    //新增成功
                    //清空文本框
                    //   this.$emit("addleavelist",res.data.info);
                    this.addLeaveList(res.data.info);
                    this.$refs["ruleForm"].resetFields();
                    this.flag = false; //关闭弹出层
                    //同步列表数据
                  }
                });
            }
          } else {
            alert("结束时间不能小于开始时间");
          }
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