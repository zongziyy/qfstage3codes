<template>
    <div>
        <button @click="changeNum(-1)">-</button>  page{{num}} <button @click="changeNum(1)">+</button>  

        <button @click="asyncAdd">异步的加法</button>
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from  "vuex";
export default {
    computed:{
       ...mapState(["num"]),
    },
    methods:{
        ...mapMutations(["changeNum"]),
        ...mapActions(["asyncChangeNum"]),
        asyncAdd(){
            //  setTimeout(()=>{//两秒以后 在做加法
            //         this.changeNum(10);
            //  },2000);
            //this.$store.dispatch("asyncChangeNum",5);
            this.asyncChangeNum(10);
        }
    }
}
</script>