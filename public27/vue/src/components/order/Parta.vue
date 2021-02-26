<template>
  <div style="float:left;" >
    <el-select v-model="value" placeholder="请选择"   @change = "changeItem()">
      <el-option
        v-for="item in list"
        :key="item._id"
        :label="item.partaname"
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
            电话:{{this.tel}}
             </el-tag>
        </div>
      </el-col>
    </el-row>
    <br/>
    <el-row type="flex" justify="start">
      <el-col :span="24" >
        <div class="grid-content bg-purple">
          <el-tag>
            日期:{{new Date(this.date).dateFormat("yyyy年mm月dd日")}}
          </el-tag>
        </div>
      </el-col>
    </el-row>
    <el-button style="margin-top: 12px;" type="success" @click="gotoPartb">确定甲方信息</el-button>
  </div>
  </div>
</template>
<script>
 //数据不多偷个懒 直接用列表的接口
import partaInfo from "../../model/parta";
import  {mapMutations} from "vuex";
export default {
  data() {
    return {
      value: "",
      list: [],
      partaname:"",
      tel:"",
      date:""
    };
  },
  methods:{
    ...mapMutations(["initPartaInfo"]),
      changeItem(){
         this.list.forEach(item=>{
             if(item._id==this.value){
                 //console.log(item);
                 this.partaname = item.partaname;
                 this.tel = item.tel;
                 this.date = item.date;
             }
         })
      },
      gotoPartb(){
        //完成parta的选择去partb
          this.initPartaInfo({
            partaid:this.value,
            partaname:this.partaname,
            tel:this.tel,
            date:this.date
          });
          this.$emit("next");
      }
  },
  mounted() {
    partaInfo.list().then(result => {
     // console.log(result.data.msg);
      this.list = result.data.msg;
    });
  }
};
</script>