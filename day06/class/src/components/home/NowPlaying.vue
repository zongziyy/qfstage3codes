<template>
  <div class="nowplaying">
    <div class="nowplaying-item" v-for="item in list" :key="item.filmId">
      <div class="item-left">
        <img :src="item.poster"/>
      </div>
      <div class="item-middle">
        <p>{{item.name}}<span style="background-color:#d2d6dc">{{item.filmType.name}}</span></p>
        <p><span v-show="item.grade"> 观众评分{{item.grade}}</span></p>
        <p class="actors">主演:{{item.actors|filterActors}}</p>
        <p>{{item.nation}}{{item.runtime}}分钟</p>
      </div>
      <div class="item-right">
          <van-button plain hairline type="primary">购票</van-button>
      </div>
    </div>

     
  </div>
</template>
<script>
import  homeModel from "../../model/homeModel"
export default {
    data(){
        return  {
            list:[]
        }
    },
    created(){
        homeModel.nowPlayingList().then(res=>{
            console.log(res.data.data.films); //这里得到了 数据
            this.list  = res.data.data.films;
        })
    },
    filters:{
        filterActors(list){//list就是所有演员的集合
            if(list){
             return list.map(item=>item.name).join(" ");//如果没有主演
            }else{
                return  "暂无主演";
            }
      
        }
    }
    
}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
    list-style: none;
}
    .nowplaying{
        width: 100%;
        overflow: hidden;
    }
    .nowplaying-item{
        display: flex;
    }
    .item-left{
        flex:1
    }
    .item-left img{
        width: 66px;
        height: 99px;
    }

    .item-middle{
        flex: 4;
        display: flex;
        flex-direction: column;
        height: 99px;  
        overflow:  hidden;

    }
    .item-middle  p{
        flex:1;
    }
    .item-right{
        flex:1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
    }
    p.actors{
     /* 强制不换行 */
    white-space: nowrap;
    /* 超出隐藏 */
    overflow: hidden;
    /* 超出省略 */
    text-overflow:ellipsis;
    flex-wrap: nowrap;
    }
   
</style>