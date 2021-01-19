<template>
    <div>
        购票页面{{this.$route.params.id}}
    </div>
</template>
<script>
export default {
    created(){
        console.log(this.$route.params.id);//取参数
        
    }
}
</script>