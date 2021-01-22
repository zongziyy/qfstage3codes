<template>
    <div class="about"></div>
</template>
<script>
import axios from "../model/axios";
export default {
    data() {
        return {};
    },
    created() {
        axios({
            method: "get",
            url:
                "http://store.blackshark.com/pro/baseinfo?skusn=K20040357615_13",
        }).then((res) => {
            console.log(res.data);
        });
    },
};
</script>
<style lang="scss" scoped>
h1 {
    width: 500px;
    height: 200px;
    font-size: 30px;
    background-color: #f2f;
    margin: 0 auto;
}
p {
    font-size: 0;
    width: 100%;
    img {
        width: 100%;
    }
}
</style>
