<template>
    <div>
        <div> 商品名称 <input v-model="goodsname"/></div>
        <div> 商品价格 <input v-model="goodsprice"/></div>
        <div> 商品数量 <input v-model="goodsnum"/></div>
        <button @click="add">新增</button>
    </div>
</template>
<script>
import  {mapMutations} from "vuex"
export default {
    data(){
        return  {
            goodsname:"",
            goodsprice:"",
            goodsnum:""
        }
    },
    methods:{
        ...mapMutations(["addList"]),
        add(){
            let  goodsname = this.goodsname;
            let  goodsprice = this.goodsprice;
            let  goodsnum = this.goodsnum;
            //新增到数据库
            // this.$store.commit("addList",{goodsname,goodsprice,goodsnum})

            this.addList({goodsname,goodsprice,goodsnum});
            // 简写
        }
    }
}
</script>