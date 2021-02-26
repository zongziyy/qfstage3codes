<template>
  <div>   
    <add-order :orderid="orderid"></add-order> 
    <el-table :data="orderList" border style="width: 100%"  :summary-method="getSummaries" show-summary>
      <el-table-column prop="id" label="序号"> </el-table-column>
      <el-table-column prop="productname" label="产品名称"> </el-table-column>
      <el-table-column prop="productmodel" label="本厂型号"> </el-table-column>
      <el-table-column prop="productcolor" label="表面处理(颜色)"> </el-table-column>
      <el-table-column prop="productlight" label="光源"> </el-table-column>
      <el-table-column prop="productdirection" label="出线方向"> </el-table-column>
      <el-table-column prop="productsize" label="规格(mm)"> </el-table-column>
     <el-table-column prop="productnum" label="数量(支)"> </el-table-column>
      <el-table-column prop="productprice" label="单价(元/米)">
       </el-table-column>
       <el-table-column prop="productprice" label="金额(元)">
         <template slot-scope="scope">
          <span v-if="scope.row.productsize>500">
          {{(scope.row.productnum*scope.row.productprice*scope.row.productsize/1000).toFixed(2)}}
          </span>
          <span v-else>
          {{(scope.row.productnum*scope.row.productprice*0.5).toFixed(2)}}
          </span>
        </template>
       </el-table-column> 
      <el-table-column label="状态">
        <template>
          <el-button type="warning" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
     <el-button type="primary" style="float:left" @click="print">生成以上订单</el-button
    >
  </div>
</template>
<script>
import orderinfo from "../../model/order";
import  addOrder  from "./Add";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
        orderid:new Date().dateFormat("yyyy-dd-mm")+""+new Date().getTime()
    };
  },
  components:{
    "add-order":addOrder
  },
  computed: {
    ...mapState(["orderList"])
  },
  mounted(){
    this.initOrderList([]);
  },
  methods: {
    ...mapMutations(["initOrderList"]),
    print(){
      this.$router.push({
        name:"print",
        params:{orderid:this.orderid}
      })
    },
    getSummaries(param){
      let  sum =[];
      sum[0]="合计";
      var totalnum= 0;
      var totalprice =0;
      this.orderList.forEach(item=>{
        totalnum += item.productnum*1
        var size = item.productsize;
        size = size>500?size:500;
        totalprice += (size *item.productnum * item.productprice)/1000;
      })
      sum[7]=totalnum;
      sum[9]=totalprice.toFixed(2);
      return sum;
    },
    //根据订单编号获取数据
    getListByOrderId(){
    orderinfo.list({orderid:this.orderid}).then(resulte => {
      this.initOrderList(
        resulte.data.list.map((item, index) => {
          item.id = index + 1;
          return item;
        })
      );
    });
    }
  }
};
</script>
  