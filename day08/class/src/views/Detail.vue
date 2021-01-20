<template>
    <div>
        详情页面{{this.$route.params.id}}
        {{this.$route.query.id}}
    </div>
</template>
<script>
export default {
    created(){
        console.log(this.$route);
    }
}
</script>