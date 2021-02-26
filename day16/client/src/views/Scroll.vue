	<template>
  <el-container>
    <el-main>
      <div class="myBox">
        <div id="silderLeft">
          <div class="menuList">侧栏菜单区</div>
          <div class="moveBtn" v-move></div>
        </div>
        <div class="silderRight">右边自适应大小,黄色的为拖拽的按钮</div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "我是第二页"
    };
  },
  directives: {
    move(el) {
      el.onmousedown = function(e) {
        var init = e.clientX;
        console.log('init',init);
        var parent = document.getElementById("silderLeft");
        var initWidth = parent.offsetWidth;
        document.onmousemove = function(e) {
          var end = e.clientX;
          // end - init表示鼠标移动的距离
          // end为鼠标移动的宽度,可用于设置最小宽度
          if(end > 40){
            var newWidth = end - init + initWidth;
            parent.style.width = newWidth + "px";
          }else{
            end = 40;
            // 最小宽度242
            parent.style.width = 28 + "px";
          }
        };
        document.onmouseup = function() {
          document.onmousemove = document.onmouseup = null;
        };
      };
    }
  } 
};
</script>
<style scoped>
.myBox{
    width: 100%;;
    height: 700px;
    border: 1px solid red;
    display: flex;
}
#silderLeft{
    width: 250px;
    height: 100%;    
    background-color: #999;
    position: relative;
    /* overflow-y: auto; */
}
/* 拖动条 */
.moveBtn{
    height: 100%;
    width: 10px;
    /* opacity: 0; */
    position: absolute;
    right: 0px;
    top: 0;
    cursor: col-resize;
    background-color: yellow;
}
.menuList{
    background-color: yellowgreen;
    /* height: 120%; */
}
.silderRight{
    height: 100%;
    background-color: sandybrown;
    flex: 1;
}



</style>


