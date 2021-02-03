<template>
  <div>
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
              action="https://jsonplaceholder.typicode.com/posts/"
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
          <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="list">

  <el-table
    :data="leaveList"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="leaveReason"
      label="请假理由"
      >
    </el-table-column>
    <el-table-column
      label="开始时间"
     >
        <template slot-scope="scope">
              <span>{{scope.row.startDate|filterDate}}</span>
               </template>

    </el-table-column>
   <el-table-column
      label="结束时间"
      >
        <template slot-scope="scope">
            <span>{{scope.row.endDate|filterDate}}</span>
      </template>
    </el-table-column>
   
    <el-table-column
      fixed="right"
      label="操作"
      >
      <template slot-scope="scope">
            <el-button type="primary" v-if="scope.row.type==1">待审批</el-button>
            <el-button type="success" v-else-if="scope.row.type==2">已同意</el-button>
            <el-button type="danger"  v-else>拒绝</el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
  </div>
</template>
<script>
import  leaveModel  from  "../model/leaveModel"
export default {
  data() {
    return {
      formLabelWidth: "100px",
      flag: false,
      leaveList:[],
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
  filters:{
      filterDate(date){
          let str  = date.substring(0,date.length-1);
          return new Date(str).dateFormate("yyyy年mm月dd日");

      }
  },
created(){
    leaveModel.query().then(res=>{
        let data = res.data;
        if(data.code==1){
            this.leaveList = data.list;
        }else{
            this.$router.push("/");
        }
    })
    },
  methods: {
    add() {
      this.flag = true;
    },
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {//验证成功以后做登录
                //
               let  {leaveReason,startDate,endDate}  = this.form;
               if(new Date(endDate)>=new  Date(startDate)){//判断时间
                    //时间合法
                    // alert("时间合法"+leaveReason);
                    //把调用接口  把数据放到数据库

                    leaveModel.add({
                        leaveReason,startDate,endDate
                    }).then(res=>{
                        if(res.data.code==1){
                            //新增成功
                            //清空文本框
                            this.$refs["ruleForm"].resetFields();
                            this.flag = false;//关闭弹出层
                            //同步列表数据
                        }
                    })

               }else{
                   alert("结束时间不能小于开始时间")
               }


          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.flag =false;
      }
  },
};
</script>