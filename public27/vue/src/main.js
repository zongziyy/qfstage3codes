import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Date.prototype.dateFormat =function(str){
  console.log(this);
 var  year =  this.getFullYear();
 var  month = this.getMonth()+1;
 var day = this.getDate();

 return  str.replace("yyyy",year).replace("mm",month).replace("dd",day);
}


Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
