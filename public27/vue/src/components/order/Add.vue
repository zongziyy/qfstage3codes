<template>
  <div>
    <el-button type="primary" @click="dialogFormVisible = true"
     style="float:left" >新增订货单</el-button
    >
    <el-dialog title="新增订货单" :visible.sync="dialogFormVisible">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="产品名称" prop="productname">
          <el-input type="text" v-model="ruleForm.productname"></el-input>
        </el-form-item>
        <el-form-item label="产品型号" prop="tel">
          <el-input type="text" v-model="ruleForm.productmodel"></el-input>
        </el-form-item>
        <el-form-item label="表面处理(颜色)" prop="productcolor">
          <el-input type="text" v-model="ruleForm.productcolor"></el-input>
        </el-form-item>
        <el-form-item label="光源" prop="productlight">
          <el-input type="text" v-model="ruleForm.productlight"></el-input>
        </el-form-item>
        <el-form-item label="出线方向" prop="productdirection">
          <el-input type="text" v-model="ruleForm.productdirection"></el-input>
        </el-form-item>
        <el-form-item label="规格(mm)" prop="productsize">
          <el-input type="text" v-model="ruleForm.productsize"></el-input>
        </el-form-item>
        <el-form-item label="数量(支)" prop="productnum">
          <el-input type="text" v-model="ruleForm.productnum"></el-input>
        </el-form-item>
        <el-form-item label="单价(元/米)" prop="productprice">
          <el-input type="text" v-model="ruleForm.productprice"></el-input>
        </el-form-item>
    

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import order from "../../model/order";
import { mapState, mapMutations } from "vuex";
export default {
  props: ["orderid"],
  data() {
    return {
      dialogFormVisible: false,
      ruleForm: {
        productname: "",
        productmodel: "",
        productcolor: "",
        productlight: "", //光源
        productdirection: "", //方向
        productsize: "", //规格(mm)
        productnum: "", //数量
        productprice: "" //产品价格
      },
      rules: {
        partaname: [
          { required: true, message: "产品名称不能为空", trigger: "blur" }
        ],
        productmodel: [
          { required: true, message: "不能为空", trigger: "blur" }
        ],
        productcolor: [
          { required: true, message: "不能为空", trigger: "blur" }
        ],
        productlight: [
          { required: true, message: "不能为空", trigger: "blur" }
        ],
        productdirection: [
          { required: true, message: "不能为空", trigger: "blur" }
        ],
        productsize: [{ required: true, message: "不能为空", trigger: "blur" }],
        productnum: [{ required: true, message: "不能为空", trigger: "blur" }],
        productprice: [{ required: true, message: "不能为空", trigger: "blur" }]
      }
    };
  },
  computed:{
      ...mapState(["partainfo","partbinfo","orderList"])
  },
  methods: {
    ...mapMutations(["addOrderItem"]),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
        if(this.partainfo.partaid&&this.partbinfo.partbid){
          var info = {
            orderid: this.orderid,
            partaid:this.partainfo.partaid,
            partbid:this.partbinfo.partbid,
            productname: this.ruleForm.productname,
            productmodel: this.ruleForm.productmodel,
            productcolor: this.ruleForm.productcolor,
            productlight: this.ruleForm.productlight,
            productdirection: this.ruleForm.productdirection,
            productsize: this.ruleForm.productsize,
            productnum: this.ruleForm.productnum,
            productprice: this.ruleForm.productprice
          };
          order.add(info).then(result => {
            if (result.data.code == 1) {
              this.$refs[formName].resetFields();
              this.dialogFormVisible = false;
              this.addOrderItem({...info,id:this.orderList.length+1});
            } else {
              this.$message.error(result.data.msg);
            }
          });
        }
        }else{
            this.$message.error("请从选择甲方开始");
        }
      });
          
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.dialogFormVisible = false;
    }
  }
};
</script>