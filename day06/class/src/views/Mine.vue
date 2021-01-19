<template>
    <div>
        我是个人页面{{num}}<button @click="add">+</button>
    </div>
</template>
<script>
export default {
    data(){
        return { num:10}
    },
    methods:{
        add(){
            this.num++;
        }
    }

}
</script>