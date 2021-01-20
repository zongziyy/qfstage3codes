<template>
    <div>
        页面二{{num}} 
        全局的数据为{{n}}
        <button @click="add">+</button>
    </div>
</template>
<script>
export default {
    data(){
        return  {
            num:this.$store.state.num
        }
    },
    computed:{
        n(){
          return    this.$store.state.num
        }
    },
    created(){
        console.log(this.$store);
    },
    methods:{
        add(){
           this.$store.commit("addNum")
        }
    }
}
</script>