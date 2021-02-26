<template>
  <div>
    <el-select v-model="value" placeholder="请选择"   @change = "changeItem()">
      <el-option
        v-for="item in list"
        :key="item._id"
        :label="item.partbname"
        :value="item._id"
      >
      </el-option>
    </el-select>
  <div v-show="value">
     <br/>
    <el-row type="flex"  justify="start">
      <el-col :span="24">
        <div class="grid-content bg-purple">
             <el-tag>
            电话:{{this.fax}}
             </el-tag>
        </div>
      </el-col>
    </el-row>
    <el-button style="margin-top: 12px;" type="success" @click="gotoPartb">确定乙方信息</el-button>
  </div>
  </div>
</template>
<script>
 //数据不多偷个懒 直接用列表的接口
import partbInfo from "../../model/partb";
import  {mapMutations} from "vuex";
export default {
  data() {
    return {
      value: "",
      list: [],
      partbname:"",
      fax:""
    };
  },
  methods:{
    ...mapMutations(["initPartbInfo"]),
      changeItem(){
         this.list.forEach(item=>{
             if(item._id==this.value){
                 //console.log(item);
                 this.partbname = item.partbname;
                 this.fax = item.fax;
             }
         })
      },
      gotoPartb(){
        //完成parta的选择去partb
          this.initPartbInfo({
            partbid:this.value,
            partbname:this.partbname,
            fax:this.fax
          });
          this.$emit("next");
      }
  },
  mounted() {
    partbInfo.list().then(result => {
     // console.log(result.data.msg);
      this.list = result.data.msg;
    });
  }
};
</script>