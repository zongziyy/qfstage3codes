<template>
    <div>第一个页面{{ this.$store.state.num }}</div>
</template>
<script>
export default {
    created() {
        this.$store.commit("changeFlag", false);
    },
    beforeDestroy() {
        this.$store.commit("changeFlag", true);
    },
};
</script>