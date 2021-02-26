<template>
  <div id="box">
    <div id="myecharts"></div>
  </div>
</template>
<style scoped>
#myecharts {
  width: 100%;
  height: 600px;
}
</style>
<script>
import * as echarts from "echarts";
import leaveModel from "../model/leaveModel";

export default {
  data() {
    return {
      xList: [],
      yList: [],
    };
  },
 async mounted() {
    //页面加载完成了
    var myChart = echarts.init(document.getElementById("myecharts"));
    let res = await leaveModel.group();
    let list = res.data.list;
    this.xList = list.map((item) => item.username);
    this.yList = list.map((item) => item.count);


    var option = {
        title: {
          text: "请假数据分析",
        },
        tooltip: {},
        legend: {
          data: ["次数"],
        },
        xAxis: {
          data: this.xList, //放用户名的集合
        },
        yAxis: {},
        series: [
          {
            barWidth: 50,
            name: "次数",
            type: "bar",
            data: this.yList, //放请假次数的集合
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);

      this.myChart = myChart; //绑定到this上以后  别的方法也就可以使用
  },

  //   mounted() {
  //     //页面加载完成了
  //     var myChart = echarts.init(document.getElementById("myecharts"));
  //     // 指定图表的配置项和数据

  //     // let  list = [{username:"lulu"},{username:"lulu"},{username:"lulu"},{username:"lili"}]

  //     // let  xList = ["lulu","lili"];
  //     // let  yList = [3,1];

  //     // let  list = [{"lulu":3},{"lili":1}]

  //     // let  list = [{"username":"lulu",count:3},{'username':"lili",count:1}]

  //     leaveModel.group().then((res) => {
  //       let list = res.data.list;
  //       this.xList = list.map((item) => item.username);
  //       this.yList = list.map((item) => item.count);
  //       var option = {
  //         title: {
  //           text: "请假数据分析",
  //         },
  //         tooltip: {},
  //         legend: {
  //           data: ["次数"],
  //         },
  //         xAxis: {
  //           data: this.xList, //放用户名的集合
  //         },
  //         yAxis: {},
  //         series: [
  //           {
  //             barWidth: 50,
  //             name: "次数",
  //             type: "bar",
  //             data: this.yList, //放请假次数的集合
  //           },
  //         ],
  //       };

  //       // 使用刚指定的配置项和数据显示图表。
  //       myChart.setOption(option);

  //       this.myChart = myChart; //绑定到this上以后  别的方法也就可以使用
  //     });
  //   },
};
</script>