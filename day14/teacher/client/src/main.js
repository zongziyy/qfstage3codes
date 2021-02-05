import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// js和css
import App from './App.vue'
import router from './router'
import store from './store'
Date.prototype.dateFormate=function(str){
  let  year = this.getFullYear();
  let  month = this.getMonth()+1;
  let  day = this.getDate();
  return  str.replace("yyyy",year).replace("mm",month).replace("dd",day);

}

Vue.filter("filterDate",(date)=>{//全局的过滤器
  let str = date.substring(0, date.length - 1);
  return new Date(str).dateFormate("yyyy年mm月dd日");
})


Vue.use(ElementUI);

Vue.config.productionTip = false
// Vue.prototype.$axios  = axios;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
