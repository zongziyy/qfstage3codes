<template>
    <div>
        结算页面
        <div v-for="item  in  list" :key="item.id">
            {{item.goodsname}}
        </div>
    </div>
</template>
<script>
import  {mapState} from  "vuex"
export default {
    computed:{
        ...mapState(["shoppingcarList"]),
        list(){
            return  this.shoppingcarList.filter(item=>item.ischecked)
        }
    }

}
</script>