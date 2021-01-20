<template>
    <div class="info">
        个人信息
        <button @click="exit">退出</button>
    </div>
</template>

<script>
export default {
    methods: {
        exit() {
            this.$emit("changeflag", false);
        },
    },
};
</script>