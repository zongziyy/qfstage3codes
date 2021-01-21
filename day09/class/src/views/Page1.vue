<template>
    <div>
        page{{num}}
    </div>
</template>
<script>
import {mapState} from  "vuex";
export default {
    computed:{
       ...mapState(["num"]),
    }
}
</script>